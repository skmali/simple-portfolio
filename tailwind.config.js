/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  darkMode: ["selector", "[data-theme=\"dark\"]"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        surface2: "rgb(var(--surface-2) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        content: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-contrast": "rgb(var(--accent-contrast) / <alpha-value>)"
      },
      maxWidth: { content: "72rem" },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"] }
    }
  },
  plugins: []
};