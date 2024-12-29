import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      }
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: {
              50: "#e1e1e1",
              100: "#b8b8b8",
              200: "#8e8e8e",
              300: "#646464",
              400: "#3b3b3b",
              500: "#111111",
              600: "#0e0e0e",
              700: "#0b0b0b",
              800: "#080808",
              900: "#050505",
              foreground: "#fff",
              DEFAULT: "#111111"
            },
            primary: {
              50: "#fefcdf",
              100: "#fdf7b3",
              200: "#fbf386",
              300: "#faee59",
              400: "#f8ea2d",
              500: "#F7E600",
              600: "#ccbd00",
              700: "#a19500",
              800: "#756d00",
              900: "#4a4500",
              foreground: "#000",
              DEFAULT: "#F7E600"
            },
            secondary: {
              50: "#eee4f8",
              100: "#d7bfef",
              200: "#bf99e5",
              300: "#a773db",
              400: "#904ed2",
              500: "#7828c8",
              600: "#6321a5",
              700: "#4e1a82",
              800: "#39135f",
              900: "#240c3c",
              foreground: "#fff",
              DEFAULT: "#7828c8"
            },
            success: {
              50: "#e2f8ec",
              100: "#b9efd1",
              200: "#91e5b5",
              300: "#68dc9a",
              400: "#40d27f",
              500: "#17c964",
              600: "#13a653",
              700: "#0f8341",
              800: "#0b5f30",
              900: "#073c1e",
              foreground: "#000",
              DEFAULT: "#17c964"
            },
            warning: {
              50: "#fef4e4",
              100: "#fce4bd",
              200: "#fad497",
              300: "#f9c571",
              400: "#f7b54a",
              500: "#f5a524",
              600: "#ca881e",
              700: "#9f6b17",
              800: "#744e11",
              900: "#4a320b",
              foreground: "#000",
              DEFAULT: "#f5a524"
            },
            danger: {
              50: "#fee1eb",
              100: "#fbb8cf",
              200: "#f98eb3",
              300: "#f76598",
              400: "#f53b7c",
              500: "#f31260",
              600: "#c80f4f",
              700: "#9e0c3e",
              800: "#73092e",
              900: "#49051d",
              foreground: "#000",
              DEFAULT: "#f31260"
            },
            background: "#0A0A0A",
            foreground: {
              50: "#ffffff",
              100: "#ffffff",
              200: "#ffffff",
              300: "#ffffff",
              400: "#ffffff",
              500: "#ffffff",
              600: "#d2d2d2",
              700: "#a6a6a6",
              800: "#797979",
              900: "#4d4d4d",
              foreground: "#000",
              DEFAULT: "#ffffff"
            },
            content1: {
              DEFAULT: "#ffffff",
              foreground: "#000"
            },
            content2: {
              DEFAULT: "#f4f4f5",
              foreground: "#000"
            },
            content3: {
              DEFAULT: "#e4e4e7",
              foreground: "#000"
            },
            content4: {
              DEFAULT: "#111111",
              foreground: "#fff"
            },
            focus: "#F7E600",
            overlay: "#000000",
            divider: "#111111"
          }
        },
        dark: {
          colors: {
            default: {
              50: "#141417",
              100: "#232327",
              200: "#313136",
              300: "#3f3f46",
              400: "#6a6a70",
              500: "#959599",
              600: "#c1c1c3",
              700: "#ececed",
              foreground: "#fff",
              DEFAULT: "#313136"
            },
            primary: {
              50: "#504a00",
              100: "#887e00",
              200: "#bfb100",
              300: "#F7E600",
              400: "#f9eb39",
              500: "#fbf173",
              600: "#fcf7ac",
              700: "#fefce6",
              foreground: "#000",
              DEFAULT: "#F7E600"
            },
            secondary: {
              50: "#270d41",
              100: "#42166e",
              200: "#5d1f9b",
              300: "#7828c8",
              400: "#9658d4",
              500: "#b589e1",
              600: "#d3b9ed",
              700: "#f2eafa",
              foreground: "#fff",
              DEFAULT: "#5d1f9b"
            },
            success: {
              50: "#074120",
              100: "#0d6f37",
              200: "#129c4e",
              300: "#17c964",
              400: "#4bd587",
              500: "#7fe1aa",
              600: "#b4edcd",
              700: "#e8faf0",
              foreground: "#000",
              DEFAULT: "#129c4e"
            },
            warning: {
              50: "#50360c",
              100: "#875b14",
              200: "#be801c",
              300: "#f5a524",
              400: "#f7b955",
              500: "#face87",
              600: "#fce2b8",
              700: "#fef6e9",
              foreground: "#000",
              DEFAULT: "#be801c"
            },
            danger: {
              50: "#4f061f",
              100: "#860a35",
              200: "#bc0e4a",
              300: "#f31260",
              400: "#f64784",
              500: "#f87da8",
              600: "#fbb2cb",
              700: "#fee7ef",
              foreground: "#fff",
              DEFAULT: "#bc0e4a"
            },
            background: "#000000",
            foreground: {
              50: "#535353",
              100: "#8c8c8c",
              200: "#c6c6c6",
              300: "#ffffff",
              400: "#ffffff",
              500: "#ffffff",
              600: "#ffffff",
              700: "#ffffff",
              foreground: "#000",
              DEFAULT: "#c6c6c6"
            },
            content1: {
              DEFAULT: "#18181b",
              foreground: "#fff"
            },
            content2: {
              DEFAULT: "#27272a",
              foreground: "#fff"
            },
            content3: {
              DEFAULT: "#3f3f46",
              foreground: "#fff"
            },
            content4: {
              DEFAULT: "#52525b",
              foreground: "#fff"
            },
            focus: "#F7E600",
            overlay: "#ffffff",
            divider: "#ffffff"
          }
        }
      },
      layout: {
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "1rem",
          large: "1.125rem"
        },
        lineHeight: {
          tiny: "1rem",
          small: "1.25rem",
          medium: "1.5rem",
          large: "1.75rem"
        },
        radius: {
          small: "2.9rem",
          medium: "4rem",
          large: "1rem"
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px"
        },
        disabledOpacity: "0.5",
        dividerWeight: "1",
        hoverOpacity: "0.9"
      }
    })
  ]
};
