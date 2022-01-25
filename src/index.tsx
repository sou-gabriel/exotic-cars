import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { CarsProvider } from 'context/CarsContext'

import { App } from './App'
import { GlobalStyle } from 'styles/global'
import { theme } from 'styles/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <CarsProvider>
    <App />
      </CarsProvider>
    <GlobalStyle />
  </ThemeProvider>,
  document.querySelector('#root'),
)
