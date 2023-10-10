import styled from "styled-components";

export const Container = styled.div`

`

export const Section = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
gap: 26px;

padding: 0px 47px 0px;
background-color: ${({ theme }) => theme.COLORS.BD_DARK_700}; 

> p {
  display: flex;
  font-size: 50px;
  height: 45px;
  align-items: flex-start;
  margin-bottom: 20px;

}
`

export const SectionTags = styled.div`

display: grid;
grid-template-rows: repeat(3, 1fr);
grid-template-columns: repeat(3, 1fr);
gap: 10px;
width: 100%;

background-color: ${({ theme }) => theme.COLORS.BD_DARK_700}; 

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
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 140%; 

padding-top: 12px;

font-family: ${({ theme }) => theme.FONTS.POPPINS};
color: ${({ theme }) => theme.COLORS.GRAY_300};

> img {
  width: 20px;
  height: 20px;
}

> a {
  display: flex;
  width: 22px;
  height: 22px;
}
`

export const Form = styled.form`

display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
gap: 26px;

background-color: ${({ theme }) => theme.COLORS.BD_DARK_700}; 

> select {
  font-family: Roboto;
  width: 100%;
  height: 48px;
  
  border: 0; 
  
  color: ${({ theme }) => theme.COLORS.GRAY_500};
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
   font-family: Roboto;
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
