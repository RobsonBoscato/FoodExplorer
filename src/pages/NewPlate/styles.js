import styled from "styled-components";

export const Container = styled.div`

`

export const Section = styled.div`

> input {
    font-family: Roboto;
    width: 100%;
    height: 48px;

    border: 0;
    padding: 12px 14px;    

    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: ${({ theme }) => theme.COLORS.BD_DARK_900};
    border-radius: 8px;
  }
`
export const Form = styled.form`

display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
padding: 73px 47px 235px;

background-color: ${({ theme }) => theme.COLORS.BD_DARK_700};  
`
