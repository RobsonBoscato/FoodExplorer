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
  align-items: center;
  justify-content: center;

  > a {
    text-decoration: none;    
    display: flex;
  }

  img {
    justify-content: center;
    align-items: center;
  }
  > span {
    font-size: 12px;
    font-weight: 400;

    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.AQUA_200};
  }

  #receipt {
    max-width: 32px;
    max-height: 32px;
    min-width: 26px;
    min-height: 26px;
    margin-left: 10px;
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
  
  `
export const Dot = styled.button`
  display: flex;
  position: relative;
  min-width: 20px;
  min-height: 20px;
  
  border: 0;
  top: -12px;
  right: 22px;  
  border-radius: 100%;
  
  font-size: 14px;
  background: ${({ theme }) => theme.COLORS.RED_200};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`