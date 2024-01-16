import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './scaffold/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        light: {
          colors: {
            primary: {
              //... 50 to 900
              50: "#310413",
              100: "#610726",
              200: "#920b3a",
              300: "#c20e4d",
              400: "#EC1015",
              500: "#f54180",
              600: "#f871a0",
              700: "#faa0bf",
              800: "#fdd0df",
              900: "#fee7ef",
              foreground: "#FFFFFF",
              DEFAULT: "#EC1015",
            },
            danger: {
              50: "#e6f1fe",
              100: "#cce3fd",
              200: "#99c7fb",
              300: "#66aaf9",
              400: "#338ef7",
              500: "#006FEE",
              600: "#005bc4",
              700: "#004493",
              800: "#002e62",
              900: "#001731",
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            }
            // ... rest of the colors
          },
        },
      }
    }
  )]
}
export default config
