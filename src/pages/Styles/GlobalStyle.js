import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  
  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, text-area {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    outline: none;
    font-size: 16px;
  }
`