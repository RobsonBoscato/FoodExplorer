import styled from 'styled-components'

export const Container = styled.div `
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  display: table;
  align-items: center;

  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_700 };
`

export const Background = styled.div`
  display: flex;
  margin-top: 150px;
  align-items: center;
  justify-content: center;
  
  flex: 1;
  
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_700};
  
  > svg {
    min-width: 49px;
    min-height: 49px ;
  }
  
  > p {
    padding: 10px;
    font-size: 40px;
    font-weight: 700;

    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.orange};
  }
`