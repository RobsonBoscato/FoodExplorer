import styled from 'styled-components'

export const Container = styled.div `
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  display: table;
  align-items: center;
  
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_700 };
  
  > p {
    margin-top: 70px;
    padding: 5%;
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
  }
`
export const Background = styled.div`
  display: flex;
  margin-top: 44px;
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
export const Heading = styled.div`
  display: flex;
  margin: 0 auto;
  width: 375px;
  height: 120px;

  flex-shrink: 0;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 3px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 18px;

  > img {
    margin-top: -28px;
    margin-left: -35px;
    width: 190px;
    height: 150px;
  }
  
  
  `
export const TextBox = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-evenly;

  > p {
    font-size: 12px;
    font-weight: 400;
    line-height: 140%;

  }

`
export const Session = styled.div `
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`
export const Card = styled.div `
  display: flex;
  width: 210px;
  height: 292px;
  padding: 24px;
  gap: 12px;
  
  flex-direction: column;
  align-items: center;

> img {
  width: 88px;
  height: 88px;
}

> p {
  padding: 10px;
  min-height: 70px;
  clip-path: inset(0% 0% 5px 0px);
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; 
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
}

> span {
  color: ${({ theme }) => theme.COLORS.AQUA_200};
  font-size: 16px;
  line-height: 100%;
}

> #button-like {

  position: relative;
  left: 50%;

  width: 24px;
  height: 22px;
}

`
export const CardBuy = styled.div `

`
export const CounterDish = styled.div `
display: flex;
width: 100px;
height: 32px;
padding: 4px 0px;
justify-content: center;
align-items: center;
gap: 14px;



`