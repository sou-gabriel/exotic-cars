import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { App } from './App'

import { GlobalStyle } from 'styles/global'
import { theme } from 'styles/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>,
  document.querySelector('#root'),
)
