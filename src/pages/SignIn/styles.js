import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  display: table;
  align-items: center;

  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_700};
`

export const Form = styled.form`

display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
padding: 73px 47px 235px;

background-color: ${({ theme }) => theme.COLORS.BD_DARK_700};  
  
> h1 {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 32px;
  font-weight: 500;
  line-height: 140%;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
}
  
> span {
  
  font-size: 14px;
  margin: 32px 0px 8px;
  line-height: 100%;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
}
> a {
  margin-top: 32px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
}
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