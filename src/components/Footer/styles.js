import { styled } from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 77px;
  padding: 24px;
  gap: 6px;

  background-color: ${({ theme }) => theme.COLORS.BD_DARK_1000};
  
  img {
    max-width: 22px;
    max-height: 18px;
  }
  
  >p {
    width: 115px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  }
  
  >span {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }


`
