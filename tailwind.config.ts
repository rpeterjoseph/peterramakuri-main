import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "hsl(var(--paper) / <alpha-value>)",
          raised: "hsl(var(--paper-raised) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "hsl(var(--ink) / <alpha-value>)",
          muted: "hsl(var(--ink-muted) / <alpha-value>)",
          faint: "hsl(var(--ink-faint) / <alpha-value>)",
        },
        line: "hsl(var(--line) / <alpha-value>)",
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          soft: "hsl(var(--accent-soft) / <alpha-value>)",
        },
        burgundy: "hsl(var(--burgundy) / <alpha-value>)",
        slateblue: "hsl(var(--slateblue) / <alpha-value>)",
      },
      fontFamily: {
        serif: [
          "var(--font-serif)",
          "Iowan Old Style",
          "Palatino Linotype",
          "URW Palladio L",
          "P052",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
        measure: "68ch",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "hsl(var(--ink))",
            "--tw-prose-headings": "hsl(var(--ink))",
            "--tw-prose-links": "hsl(var(--accent))",
            "--tw-prose-bold": "hsl(var(--ink))",
            "--tw-prose-quotes": "hsl(var(--ink))",
            "--tw-prose-quote-borders": "hsl(var(--accent))",
            "--tw-prose-captions": "hsl(var(--ink-muted))",
            "--tw-prose-hr": "hsl(var(--line))",
            "--tw-prose-th-borders": "hsl(var(--line))",
            "--tw-prose-td-borders": "hsl(var(--line))",
            maxWidth: "none",
          },
        },
      }),
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fade: "fade 200ms ease-in-out",
      },
    },
  },
  plugins: [typography],
};

export default config;
