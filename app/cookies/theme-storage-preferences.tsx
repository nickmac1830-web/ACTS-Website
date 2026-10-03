"use client";

import { useEffect, useState } from "react";

export function ThemeStoragePreferences() {
  const [remember, setRemember] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      setRemember(localStorage.getItem("acts-website-theme-saving") !== "off");
    } catch {
      setRemember(false);
    }
  }, []);

  function changeRemember(next: boolean) {
    try {
      if (next) {
        localStorage.removeItem("acts-website-theme-saving");
        localStorage.setItem("acts-website-theme", document.documentElement.dataset.theme === "dark" ? "dark" : "light");
      } else {
        localStorage.setItem("acts-website-theme-saving", "off");
        localStorage.removeItem("acts-website-theme");
      }
      setRemember(next);
      setMessage(next ? "Your theme choice will be remembered." : "Your saved theme has been removed. Future theme changes will not be saved.");
    } catch {
      setMessage("Your browser is blocking storage. You can still change the theme for this page.");
    }
  }

  return (
    <div className="cookie-preferences">
      <label>
        <input type="checkbox" checked={remember} onChange={(event) => changeRemember(event.target.checked)} />
        <span>Remember my light/dark theme on this browser</span>
      </label>
      <p>Turn this off to remove your saved theme. We remember only that saving is disabled, so this choice continues to apply on later visits.</p>
      <p role="status" aria-live="polite">{message}</p>
    </div>
  );
}
