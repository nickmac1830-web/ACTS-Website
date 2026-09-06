import { env } from "cloudflare:workers";

export const runtime = "edge";

const allowedCountries = new Set([
  "Australia",
  "Canada",
  "New Zealand",
  "United Kingdom",
  "United States",
]);

const allowedInterests = new Set(["alpha", "beta", "both"]);

type RuntimeEnv = {
  DB?: D1Database;
  TESTER_ADMIN_KEY?: string;
};

type TesterRow = {
  id: string;
  full_name: string;
  google_play_email: string;
  country: string;
  testing_interest: string;
  android_device: string | null;
  status: string;
  created_at: string;
  updated_at: string;
};

function getRuntimeEnv(): RuntimeEnv {
  return env as unknown as RuntimeEnv;
}

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function cleanText(value: unknown, maximumLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maximumLength) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function csvCell(value: string | null) {
  const text = value ?? "";
  return `"${text.replaceAll('"', '""')}"`;
}

function isAuthorised(request: Request, adminKey: string) {
  const supplied = request.headers.get("authorization");
  return supplied === `Bearer ${adminKey}`;
}

export async function POST(request: Request) {
  const runtimeEnv = getRuntimeEnv();
  if (!runtimeEnv.DB) {
    return json({ error: "Registrations are temporarily unavailable. Please try again shortly." }, 503);
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: "Please check the form and try again." }, 400);
  }

  // Quietly accept bot submissions caught by the hidden field without storing them.
  if (cleanText(payload.website, 200)) {
    return json({ ok: true });
  }

  const fullName = cleanText(payload.fullName, 100);
  const googlePlayEmail = cleanText(payload.googlePlayEmail, 254).toLowerCase();
  const country = cleanText(payload.country, 80);
  const testingInterest = cleanText(payload.testingInterest, 20);
  const androidDevice = cleanText(payload.androidDevice, 120) || null;
  const consent = payload.consent === true;

  if (!fullName || !isEmail(googlePlayEmail) || !allowedCountries.has(country) || !allowedInterests.has(testingInterest) || !consent) {
    return json({ error: "Please complete every required field using your Google Play account email." }, 400);
  }

  const now = new Date().toISOString();

  try {
    await runtimeEnv.DB.prepare(
      `INSERT INTO android_testers (
        id, full_name, google_play_email, country, testing_interest,
        android_device, consent, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, 1, 'new', ?, ?)
      ON CONFLICT(google_play_email) DO UPDATE SET
        full_name = excluded.full_name,
        country = excluded.country,
        testing_interest = excluded.testing_interest,
        android_device = excluded.android_device,
        consent = 1,
        updated_at = excluded.updated_at`,
    )
      .bind(
        crypto.randomUUID(),
        fullName,
        googlePlayEmail,
        country,
        testingInterest,
        androidDevice,
        now,
        now,
      )
      .run();

    return json({ ok: true });
  } catch (error) {
    console.error("Unable to save Android tester registration", error);
    return json({ error: "We could not save your registration. Please try again." }, 500);
  }
}

export async function GET(request: Request) {
  const runtimeEnv = getRuntimeEnv();
  const adminKey = runtimeEnv.TESTER_ADMIN_KEY;

  if (!runtimeEnv.DB || !adminKey) {
    return json({ error: "The registrations dashboard is not configured." }, 503);
  }

  if (!isAuthorised(request, adminKey)) {
    return json({ error: "The access code is incorrect." }, 401);
  }

  try {
    const result = await runtimeEnv.DB.prepare(
      `SELECT id, full_name, google_play_email, country, testing_interest,
        android_device, status, created_at, updated_at
      FROM android_testers
      ORDER BY created_at DESC`,
    ).all<TesterRow>();

    const rows = result.results ?? [];
    const format = new URL(request.url).searchParams.get("format");

    if (format === "csv") {
      const headings = [
        "Name",
        "Google Play account email",
        "Country",
        "Testing interest",
        "Android device",
        "Status",
        "Registered at",
      ];
      const lines = [
        headings.map(csvCell).join(","),
        ...rows.map((row) =>
          [
            row.full_name,
            row.google_play_email,
            row.country,
            row.testing_interest,
            row.android_device,
            row.status,
            row.created_at,
          ]
            .map(csvCell)
            .join(","),
        ),
      ];

      return new Response(lines.join("\n"), {
        headers: {
          "Cache-Control": "no-store",
          "Content-Disposition": 'attachment; filename="acts-android-testers.csv"',
          "Content-Type": "text/csv; charset=utf-8",
        },
      });
    }

    return json({ testers: rows });
  } catch (error) {
    console.error("Unable to load Android tester registrations", error);
    return json({ error: "Registrations could not be loaded. Please try again." }, 500);
  }
}
