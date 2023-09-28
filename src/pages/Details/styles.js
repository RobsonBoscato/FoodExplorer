import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_100}; 
`

export const Session = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
  align-items: center;
  justify-content: center;
  gap: 6px;
`

export const DishDetails = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};

> img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px auto; 
    width: 264px;
    height: 264px;
}

`
export const Heading = styled.div`
display: flex;

> a {
  margin: 37px 0px 0px 40px;
  text-decoration: none;
  
}

> a {
  margin-top: 37px;
  display: inline-flex;

  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  line-height: 140%;

  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
}

`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  > p {
    text-align: center;
    font-size: 27px;
    font-weight: 500;
    line-height: 140%;
  }
`
export const Description = styled.div`
  display: flex;
  text-align: center;
  margin: 0 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
`
export const Tags = styled.div`

  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;

  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_1000};
`
export const OrderButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-items: stretch;
`
export const CounterOrders = styled.div`
  display: flex;  
  margin: 48px auto;
  width: 100%;
  height: 32px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  gap: 14px;

> #order {
  display: inline-flex;
  width: 1500px;
}
`
