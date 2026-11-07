import type { Config } from "tailwindcss";

// Colours are defined as CSS variables in app/globals.css.
// Edit the palette there, not here.
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: {
        bg: v("bg"),
        soft: v("bg-soft"),
        surface: v("surface"),
        "surface-2": v("surface-2"),
        line: v("border"),
        fg: v("fg"),
        muted: v("muted"),
        accent: v("accent"),
        "accent-soft": v("accent-soft"),
        coral: v("coral"),
        "coral-hover": v("coral-hover"),
        navy: v("navy"),
        "navy-light": v("navy-light"),
        cream: v("cream"),
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgb(20 33 61 / 0.04), 0 4px 16px -4px rgb(20 33 61 / 0.08)",
        lift: "0 2px 4px rgb(20 33 61 / 0.04), 0 18px 40px -12px rgb(20 33 61 / 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
