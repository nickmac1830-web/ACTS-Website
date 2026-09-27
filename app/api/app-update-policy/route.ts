import policy from "../../../content/app-update-policy.json";

export function GET() {
  return Response.json(policy, {
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}
