import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      shape: '#FFF',
      shadow: '#0000001A',
      title: '#313136',
      text: '#656469',
      background: '#D8D7D7',
      panelBackground: '#F3F1FC',
      authButton: '#7B89F4',
      searchButtonBackground: '#00000014',
      carouselButtonBackground: '#00000029',
    }
  }
}
