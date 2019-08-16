import { DefaultTheme } from "styled-components"

export const defaultTheme: DefaultTheme = {
  breakpoints: {
    smartWatch: "(max-width: 320px)",
    mobile: "(max-width: 480px)",
    phablet: "(max-width: 768px)",
    tablet: "(max-width: 1024px)",
    laptop: "(max-width: 1200px)",
    desktop: "(max-width: 1600px)"
  },
  minBreakpoints: {
    smartWatch: "(min-width: 321px)",
    mobile: "(min-width: 481px)",
    phablet: "(min-width: 769px)",
    tablet: "(min-width: 1025px)",
    laptop: "(min-width: 1201px)",
    desktop: "(min-width: 1601px)"
  },
  fontFamily: {
    regular: "Roboto-Regular",
    bold: "Roboto-Bold",
    light: "Roboto-Light",
    medium: "Roboto-Medium",
    italic: "Roboto-Italic"
  },
  fontSizes: {
    headlines: {
      sm: ["1.5rem", "1.25rem", "1rem", "1rem", "1rem"],
      md: ["2rem", "1.75rem", "1.5rem", "1.25rem", "1rem"],
      lg: ["2rem", "1.75rem", "1.5rem", "1.25rem", "1rem"]
    },
    default: "0.75rem"
  },
  colors: {
    neutral: "#FFFFFF",
    dark: "#000000",
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    tertiary: "#000000",
    trite: "#EBEDEC",
    success: "#29857E",
    warning: "#E9A30C",
    error: "#B60012",
    complimentary: "#DB0011",
    info: "#0594ff",
    text: {
      default: "#4A4A4A",
      dark: "#000000",
      light: "#54698D",
      faint: "#D7D8D6"
    },
    background: {
      default: "#FFFFFF",
      dark: "#000000",
      primary: "#0594ff",
      primaryLowOpacity: "#0594ff",
      secondary: "#D8D8D8",
      tertiary: "#FAFAFA",
      quaternary: "#575757",
      quintenary: "#3D505D",
      senary: "#F3F3F2",
      neutral: "#FFFFFF",
      disabled: "#FAFAFA",
      septuary: "#A8000B",
      octonary: "#EEEEEE",
      positive: "#00847E"
    },
    buttons: {
      primary: "#0594ff",
      secondary: "#000000",
      tertiary: "#FFFFFF",
      disabled: "#D7D8D6"
    }
  },
  borders: {
    primary: "none",
    secondary: "none",
    tertiary: "solid 1px #000000"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "system-ui, sans-serif",
    mono: "Menlo, monospace"
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  },
  zIndexes: {
    subLayer1: -200,
    subLayer2: -100,
    componentLayer1: 100,
    componentLayer2: 200,
    floatingLayer1: 1000,
    floatingLayer2: 2000
  }
}
