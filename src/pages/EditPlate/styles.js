import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ theme }) => theme.COLORS.BD_DARK_400}; 


@media screen and (min-width: 1000px) {
    main {
      width: 112rem;
      margin: 4rem auto 11.6rem;

      a {
        gap: 1.1rem;

        font-family: "Poppins", sans-serif;
        font-weight:700;
        font-size: 2.4rem;
        line-height:1.4rem;

        svg {
          width: 1.2rem;
          height: 2.2rem;
        }
      }

      h1 {
        margin-bottom: 0.8rem;
      }

      .row {
        flex-direction: row;
        gap: 3.2rem;
        align-items: end;
        

        > div {
          gap: 1.6rem;
          
        }

        > div:nth-child(2) {
          width: 50%;
        }
      

      }

      .image label {
        width: 22.9rem;
      }

      .dish-category {
        width: 36.4rem;

        select {
          height: 4.8rem;
        }
      }

      .ingredients {
        width: 83.7rem;

        grid-template-columns: repeat(5, 1fr);

        > div {
          width: fit-content;
        }
      }

      > div:last-child {
        align-self: end;

        button {
          width: fit-content;
          padding: 1.2rem 2.4rem;
        }
      }
    }
  }
`

export const Section = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
gap: 26px;

padding: 0px 47px 60px;

> p {
  display: flex;
  font-size: 50px;
  height: 45px;
  align-items: flex-start;
  margin-bottom: 20px;
}
`

export const Heading = styled.div`

display: flex;
font-size: 18px;
font-style: normal;
font-weight: 500;
padding-left: 5%;

padding-top: 12px;

font-family: ${({ theme }) => theme.FONTS.POPPINS};
color: ${({ theme }) => theme.COLORS.GRAY_300};

> img {
  width: 20px;
  height: 20px;
}
`

export const Form = styled.form`

display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
gap: 26px;
margin-bottom: 50px;

> select {
  font-family: Roboto;
  width: 100%;
  height: 48px;
  border: 0; 
  
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_900}; 
  border-radius: 8px;
}

> label, p {
  font-family: Roboto;
  width: 100%;
  margin-bottom: -12px;
  border: 0; 
  
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  
  > input {
    display: none;
  }

  > img {
   padding-left: 20px;
  }

}
label :first-child {
  display: flex;
  align-items: center;
   font-family: Roboto;
   font-size: 14px;
   width: 100%;
   height: 48px;
   border: 0;
   padding: 12px 62px;    
   margin-bottom: -40px;
   
   color: ${({ theme }) => theme.COLORS.GRAY_300};
   border-radius: 8px;
   background-color: ${({ theme }) => theme.COLORS.BD_DARK_900};  
 }

 #second {
  margin-top: 24px;
 }

 #description {
  height: 180px;

  &placeholder {
    display: flex;
    text-align: start;
  }
 }
`

export const ButtonsBox = styled.div`
  display: flex;
  gap: 30px;
  `

