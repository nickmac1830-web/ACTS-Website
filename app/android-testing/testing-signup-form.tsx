"use client";

import { CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function TestingSignupForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/android-testers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          googlePlayEmail: data.get("googlePlayEmail"),
          country: data.get("country"),
          testingInterest: data.get("testingInterest"),
          androidDevice: data.get("androidDevice"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
        }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Registration could not be submitted.");

      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Registration could not be submitted.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="testing-success" role="status">
        <CheckCircle2 size={38} aria-hidden="true" />
        <h2>Your registration has been received.</h2>
        <p>
          ACTS will review your details, add your Google Play account to the appropriate testing list and email your private joining instructions when access is ready.
        </p>
        <button type="button" onClick={() => setStatus("idle")}>Register another tester</button>
      </div>
    );
  }

  return (
    <form className="testing-form" onSubmit={submitForm}>
      <div className="form-heading">
        <p className="kicker">Tester registration</p>
        <h2>Request Android access</h2>
        <p>Use the exact Google account currently signed into the Play Store on your Android phone.</p>
      </div>

      <div className="form-grid">
        <label>
          <span>Full name *</span>
          <input name="fullName" type="text" autoComplete="name" maxLength={100} required />
        </label>

        <label>
          <span>Google Play account email *</span>
          <input name="googlePlayEmail" type="email" autoComplete="email" maxLength={254} required />
          <small>This must be the Google account used in the Play Store.</small>
        </label>

        <label>
          <span>Country *</span>
          <select name="country" defaultValue="" required>
            <option value="" disabled>Select your country</option>
            <option>Australia</option>
            <option>Canada</option>
            <option>New Zealand</option>
            <option>United Kingdom</option>
            <option>United States</option>
          </select>
        </label>

        <label>
          <span>Android phone or tablet</span>
          <input name="androidDevice" type="text" placeholder="For example, Samsung Galaxy S24" maxLength={120} />
        </label>
      </div>

      <fieldset>
        <legend>Which testing stage are you interested in? *</legend>
        <label className="radio-option">
          <input type="radio" name="testingInterest" value="alpha" required />
          <span><strong>Closed Alpha</strong><small>Join the first limited group and remain opted in for at least 14 consecutive days.</small></span>
        </label>
        <label className="radio-option">
          <input type="radio" name="testingInterest" value="beta" />
          <span><strong>Beta</strong><small>Join the wider Android test when it becomes available.</small></span>
        </label>
        <label className="radio-option">
          <input type="radio" name="testingInterest" value="both" />
          <span><strong>Either or both</strong><small>Invite me wherever ACTS needs testers.</small></span>
        </label>
      </fieldset>

      <label className="consent-option">
        <input name="consent" type="checkbox" required />
        <span>I agree that ACTS may use these details to manage Android testing access and contact me with testing instructions. *</span>
      </label>

      <div className="honeypot" aria-hidden="true">
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {status === "error" && <p className="form-error" role="alert">{error}</p>}

      <button className="testing-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? <><LoaderCircle className="spin" size={18} /> Sending registration</> : "Register for Android testing"}
      </button>

      <p className="form-privacy">
        Registration does not grant immediate access. After approval, ACTS will email the appropriate Google Play joining link. See the <a href="/privacy">Privacy Policy</a>.
      </p>
    </form>
  );
}
