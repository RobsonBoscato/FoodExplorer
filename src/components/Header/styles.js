import styled from "styled-components";
export const Container = styled.header `
  display: flex;
  width: 100%;
  height: 114px;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_1000};
  `

export const Navbar = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 8px;


  img {
    justify-content: center;
    align-items: center;
  }

  #receipt {
    max-width: 32px;
    max-height: 32px;

    margin-left: 10px;
    margin: 0 16px;
  }
  
  #polygon {
    max-width: 24px;
    max-height: 24px;
  }
  
  #menu {
    max-width: 24px;
    max-height: 18px;

    margin: 0 16px;
  }

  >p {
    font-size: 21px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

`
export const Dot = styled.button `
  display: flex;
  position: relative;
  width: 20px;
  height: 20px;
  
  border-radius: 99px;
  border: 0;
  top: -12px;
  right: 40px;
  
  border-radius: 99px;
  background: ${({ theme }) => theme.COLORS.RED_200};
  
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`
