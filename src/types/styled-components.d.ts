import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      smartWatch: string
      mobile: string
      phablet: string
      tablet: string
      laptop: string
      desktop: string
    }
    minBreakpoints: {
      smartWatch: string
      mobile: string
      phablet: string
      tablet: string
      laptop: string
      desktop: string
    }
    fontFamily: {
      regular: string
      bold: string
      light: string
      medium: string
      italic: string
    }
    fontSizes: {
      headlines: {
        sm: string[]
        md: string[]
        lg: string[]
      }
      default: string
    }
    colors: {
      primary: string
      secondary: string
      tertiary: string
      neutral: string
      dark: string
      trite: string
      success: string
      warning: string
      complimentary: string
      error: string
      info: string
      text: {
        default: string
        dark: string
        light: string
        faint: string
      }
      background: {
        default: string
        dark: string
        primary: string
        primaryLowOpacity: string
        secondary: string
        tertiary: string
        quaternary: string
        quintenary: string
        senary: string
        septuary: string
        octonary: string
        neutral: string
        disabled: string
        positive: string
      }
      buttons: {
        primary: string
        secondary: string
        tertiary: string
        disabled: string
      }
    }
    borders: {
      primary: string
      secondary: string
      tertiary: string
    }
    space: number[]
    fonts: {
      sans: string
      mono: string
    }
    shadows: {
      small: string
      large: string
    }
    zIndexes: {
      subLayer1: number
      subLayer2: number
      componentLayer1: number
      componentLayer2: number
      floatingLayer1: number
      floatingLayer2: number
    }
  }
}
