import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 120px;

  display: table;
  align-items: center;

  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_400};

  main {
    width: 90%;
    max-width: 320px;
    margin: 0 auto; 

    form {
      margin-top: 75px;
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      padding: 70px 0px 235px;
      gap: 8px;

      > h1 {
        display: none;
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
  }
}
  
@media screen and (min-width: 1000px) {
  main {
    width: 100%;
    max-width: 110rem;
    padding: 5%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    form {
      background-color: ${({ theme }) => theme.COLORS.BD_DARK_700};
      border: none;
      border-radius: 16px;
      margin: 0;
      padding: 6.4rem;
      max-width: 520px;

      h1 {

        display: block;

        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 32px;
        line-height: 44px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        text-align: center;
      }
    }
  }
}
`

export const Background = styled.div`
display: flex;
align-items: center;
justify-content: center;

flex: 1;
background-color: ${({ theme }) => theme.COLORS.BD_DARK_400};

> svg {
min-width: 49px;
min-height: 49px;
}

> p {
padding: 10px;
font-size: 40px;
font-weight: 700;

font-family: ${({ theme }) => theme.FONTS.ROBOTO};
color: ${({ theme }) => theme.COLORS.orange};
}
`