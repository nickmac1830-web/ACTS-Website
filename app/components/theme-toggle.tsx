"use client";

import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "acts-website-theme";

export function ThemeToggle() {
  function toggleTheme() {
    const nextIsDark = document.documentElement.dataset.theme !== "dark";
    const nextTheme = nextIsDark ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
    >
      <Moon className="theme-icon-moon" size={18} strokeWidth={1.6} aria-hidden="true" />
      <Sun className="theme-icon-sun" size={18} strokeWidth={1.6} aria-hidden="true" />
    </button>
  );
}
