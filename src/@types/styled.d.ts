import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      shape: string,
      shadow: string,
      title: string,
      text: string,
      background: string,
      panelBackground: string,
      authButton: string,
      searchButtonBackground: string,
      carouselButtonBackground: string,
    }
  }
}
