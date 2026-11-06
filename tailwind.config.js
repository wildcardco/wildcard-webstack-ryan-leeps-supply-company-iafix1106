/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        "accent-ink": "var(--color-accent-ink)",
        header: "var(--color-header)",
        line: "var(--color-line)",
        notice: "var(--color-notice)",
        "notice-ink": "var(--color-notice-ink)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      maxWidth: {
        page: "var(--page-max)",
      },
    },
  },
  plugins: [],
};
