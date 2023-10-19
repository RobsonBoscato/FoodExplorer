import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_100}; 
  font-family: ${({ theme }) => theme.FONTS.POPPINS};

  
  #imgCard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      display: flex;
      width: 260px;;
      height: 260px;

    }
    
  #button-wrapper {
      width: 100%;
  }
  #button-wrapped {
    margin-top: 40px;
      width: 100%;
      height: 48px;
  }
    
}

#tagsBox {
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_100};
}


> img {
  #return {
    color: yellow;
  }
}

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
font-size: 24px;
font-style: normal;
font-weight: 500;
padding: 5%;


color: ${({ theme }) => theme.COLORS.GRAY_300};

> img {
  width: 20px;
  height: 20px;
}

> a {
  display: flex;
  width: 36px;
  height: 36px;
}
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  display: inline-flex;
  justify-content: space-around;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_1000};

  border-radius: 5px;
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
