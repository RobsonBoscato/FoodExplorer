import { styled } from "styled-components";

export const Container = styled.footer`
    text-align: center;
    bottom: 0;
    width: 100%;

    main {
      height: 100vh;
    }
  .footerImg {

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: auto;
  width: 100%;
  height: 77px;
  padding: 24px;
  gap: 6px;

  background-color: ${({ theme }) => theme.COLORS.BD_DARK_1000};
  

  p {
    display: flex;
    text-align: center;
    align-items: center;
    width: 150px;
    gap:20px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_700};

    img {
      max-width: 22px;
      max-height: 18px;
    }
  }
    
    span {
      font-size: 12px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
}
  `
