"use client";

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
      <svg className="theme-moon" viewBox="0 0 32 32" role="presentation" aria-hidden="true">
        <path d="M25.7 23.9A11.7 11.7 0 0 1 10.1 6.5a12.7 12.7 0 1 0 15.6 17.4Z" />
      </svg>
    </button>
  );
}
