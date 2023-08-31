import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './pages/Styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'

import { Home } from './pages/Home'
import {SignUp} from './pages/SignUp'
import {SignIn} from './pages/SignIn'
import theme from './pages/Styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
