"use client";

import { ClipboardCopy, Download, LoaderCircle, LockKeyhole } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Tester = {
  id: string;
  full_name: string;
  google_play_email: string;
  country: string;
  testing_interest: string;
  android_device: string | null;
  status: string;
  created_at: string;
};

export function RegistrationsDashboard() {
  const [accessCode, setAccessCode] = useState("");
  const [testers, setTesters] = useState<Tester[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailList = useMemo(() => testers?.map((tester) => tester.google_play_email).join(", ") ?? "", [testers]);

  async function loadRegistrations(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/android-testers", {
        headers: { Authorization: `Bearer ${accessCode}` },
      });
      const result = (await response.json()) as { testers?: Tester[]; error?: string };
      if (!response.ok || !result.testers) throw new Error(result.error || "Unable to load registrations.");
      setTesters(result.testers);
    } catch (loadError) {
      setTesters(null);
      setError(loadError instanceof Error ? loadError.message : "Unable to load registrations.");
    } finally {
      setLoading(false);
    }
  }

  async function copyEmails() {
    await navigator.clipboard.writeText(emailList);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  async function downloadCsv() {
    const response = await fetch("/api/android-testers?format=csv", {
      headers: { Authorization: `Bearer ${accessCode}` },
    });
    if (!response.ok) {
      setError("The CSV could not be downloaded.");
      return;
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "acts-android-testers.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  if (!testers) {
    return (
      <form className="admin-login" onSubmit={loadRegistrations}>
        <LockKeyhole size={34} aria-hidden="true" />
        <h1>Android tester registrations</h1>
        <p>Enter the private ACTS administrator access code.</p>
        <label><span>Access code</span><input type="password" value={accessCode} onChange={(event) => setAccessCode(event.target.value)} required /></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit" disabled={loading}>{loading ? <><LoaderCircle className="spin" size={18} /> Loading</> : "Open registrations"}</button>
      </form>
    );
  }

  return (
    <div className="registrations-panel">
      <div className="registrations-heading">
        <div><p className="kicker">Private administration</p><h1>Android tester registrations</h1><p>{testers.length} registered tester{testers.length === 1 ? "" : "s"}</p></div>
        <div className="registrations-actions">
          <button type="button" onClick={copyEmails}><ClipboardCopy size={17} /> {copied ? "Copied" : "Copy Play emails"}</button>
          <button type="button" onClick={downloadCsv}><Download size={17} /> Download CSV</button>
        </div>
      </div>

      {error && <p className="form-error" role="alert">{error}</p>}

      <div className="registrations-table-wrap">
        <table>
          <thead><tr><th>Name</th><th>Google Play account</th><th>Stage</th><th>Country</th><th>Device</th><th>Registered</th></tr></thead>
          <tbody>
            {testers.map((tester) => (
              <tr key={tester.id}>
                <td>{tester.full_name}</td>
                <td>{tester.google_play_email}</td>
                <td>{tester.testing_interest === "both" ? "Alpha or Beta" : tester.testing_interest}</td>
                <td>{tester.country}</td>
                <td>{tester.android_device || "—"}</td>
                <td>{new Date(tester.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {testers.length === 0 && <p className="registrations-empty">No registrations have been submitted yet.</p>}
    </div>
  );
}
