import styled from "styled-components";
export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 114px;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_1000};
  `

export const Navbar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  > a {
    text-decoration: none;    
  }

  img {
    justify-content: center;
    align-items: center;
  }
  
  #polygon {
    max-width: 24px;
    max-height: 24px;
    min-width: 20px;
    min-height: 20px;
    margin-right: -30px;
  }
  
  #menu {
    max-width: 24px;
    max-height: 18px;   
    min-width: 20px;
    min-height: 14px;
    margin-left: 30px;
  }

  >p, a {
    display: contents;
    width: 130px;
    font-size: 21px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    gap: 8px;
  }
  
  > span {
    font-size: 12px;
    font-weight: 400;
    line-height: 160%;
    margin: 0 30px 0 -30px;

    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.AQUA_200};
  }
  
  `
export const Dot = styled.button`
  display: flex;
  position: relative;
  min-width: 20px;
  min-height: 20px;
  
  border: 0;
  top: -12px;
  right: 70px;  
  border-radius: 100%;
  
  font-size: 14px;
  background: ${({ theme }) => theme.COLORS.RED_200};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`