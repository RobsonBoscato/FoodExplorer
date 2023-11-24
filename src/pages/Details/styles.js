import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_400}; 
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  
  .footer-wrapper {
    text-align: center;
    bottom: 0;
    width: 100%;
    position: absolute;
  }
  
  main {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    background-color: ${({ theme }) => theme.COLORS.BD_DARK_400}; 
    > a {
      width: fit-content;

      display: flex;
      align-items: center;
      text-align: center;
      gap: 1.1rem;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 24px;
      line-height: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  
  #imgCard{
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    
    > img {
      display: flex;
      width: 240px;
      height: 240px;
      border-radius: 100%;

    }
    
    #button-wrapper {
        width: 100%;
    }
    #button-wrapped {
      margin-top: 40px;
        width: 100%;
        height: 48px;
    }  
    #button-edit {
      text-decoration: none;
    }
    
    #tagsBox {
      background-color: ${({ theme }) => theme.COLORS.BD_DARK_400};
    }
  }
}

@media screen and (min-width: 1000px) {
    main {

        #imgCard {

          > img {
          width: 320px;
          height: 320px;
        }
      }
    }
  }
@media screen and (min-width: 1200px) {
    main {
      width: 100%;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        #imgCard {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          flex-direction: row;
          gap: 40px;

          > img {
          width: 390px;
          height: 390px;
          margin: 0;
          border-radius: 100%;
        }

        .details {
          max-width: 600px;
          > span {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 34px;
          }
      }

        p {
          display: flex;
          font-weight: 500;
          font-size: 40px;
          line-height:56px;

        }

        #tagsBox {  
          display: flex;
          flex-direction: row;
          gap: 12px;
          min-width: 50px;
          min-height: 30px;
          flex-wrap: wrap;
          justify-content: center;

          span {
            margin: 0;
          }
        }
        
        #button-wrapped {
          width: 120px;
          height: 48px;
        }  

        #button-edit {
          display: flex;
          width: 120px;
          text-decoration: none;

        }
      }
      
      .details + button {
        width: fit-content;
        padding: 1.2rem 2.4rem;
      }
    }
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
padding: 2%;


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
  gap: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  > p {
    text-align: center;
    font-size: 27px;
    font-weight: 500;
    line-height: 140%;
  }
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
  justify-content: center;
  align-items: center;
  gap: 14px;

> #order {
  display: inline-flex;
  width: 1500px;
}
`
