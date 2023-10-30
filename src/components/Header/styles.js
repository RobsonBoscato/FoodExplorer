import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 114px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_1000};
`

export const Navbar = styled.div`
  display: flex;
  gap: 8px;
  height: 114px;
  align-items: center;
  justify-content: center;
  
  button:first-child {
      width: 2.4rem;
      height: 1.8rem;
      background: none;
      border: none;
  }

  > a {
    text-decoration: none;    
    display: flex;
    align-items: center;
  }

  img {
    justify-content: center;
    align-items: center;
  }
  > span {
    font-size: 12px;
    
    margin-left: 20px;
    font-weight: 400;

    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.AQUA_200};
  }

  > label {
      display: none;
    }

    .logout {
      margin-left: 40px;
      display: none;
    }

    .order {
      display: none;
    }

    .user {
      align-items: center;
      justify-content: center;

      
      .desktop {
        display: block;
        
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        background-color: ${({ theme }) => theme.COLORS.RED_200};
     
      }
      .receipt {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background-color: ${({ theme }) => theme.COLORS.RED_200};
        border: none;
        border-radius: 5px;
        gap: 0.8rem;
      }

      .mobile {
        display: none;
      }
      
    }
  
  #polygon {
    max-width: 24px;
    max-height: 24px;
    min-width: 20px;
    min-height: 20px;
    margin: 0 10px 0 50px;
  }
  
  #menu {
    max-width: 24px;
    max-height: 18px;   
    min-width: 20px;
    min-height: 14px;
    margin-left: 3px;
  }

  >p, a {
    font-size: 21px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .order-wrapper {
    display: flex;
    margin-left: 40px;
  }
  
  @media screen and (min-width: 1000px) {
    width: 100%;
    height: 104px;
    padding: 24px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    .menu {
      display: none;
    }

    .order {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 220px;
    }
    

      a div {
        gap: 10px;

        svg {
          width: 30px;
          height: 30px;
        }

        h1, p {
          font-family: "Roboto", sans-serif;
          font-weight: 700;
          font-size: 24px;
          line-height: normal;
        }
      }

      > label {
        width: 700px;
        padding: 12px 100px;
        

        display: flex;
      }

      .logout {
        background: none;
        border: none;

        display: block;
      }
    }

    .user {
      align-items: center;
      justify-content: center;

      .order-wrapper {
        width: 21.6rem;
        height: 5.6rem;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        border: none;
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;

        .mobile {
          display: none;
        }

        .desktop {
          display: block;

          font-family: "Poppins", sans-serif;
          font-weight: 500;
          font-size: 1.4rem;
          line-height: 2.4rem;
          
          color: aqua;
        }
      }
    }

    .admin {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      a {
        width: fit-content;
        margin: 0;

        display: flex;
        flex-direction: column;
        gap: 0;

        > div {
          width: fit-content;
        }

        p {
          margin-top: -0.7rem;

          justify-self: flex-end;
        }
      }

      label + button {
        width: 21.6rem;
        height: 5.6rem;

        display: flex;
        align-items: center;
        justify-content: center;

      }
    }
`

export const Dot = styled.button`
display: flex;
position: relative;
min-width: 20px;
min-height: 20px;

border: 0;
top: -12px;
right: 10px;
border-radius: 100%;

font-size: 14px;
background: ${({ theme }) => theme.COLORS.RED_200};
font-family: ${({ theme }) => theme.FONTS.POPPINS};
color: ${({ theme }) => theme.COLORS.GRAY_100};
`
