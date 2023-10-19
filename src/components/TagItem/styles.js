import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 align-items: center;
  width: 120px;
  height: 32px;
  margin: 0 auto;
  
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_500}` : "none"};
  border-radius: 10px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    display: flex;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding-right: 10px;
  }
  
  .button-add {
    display: flex;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    padding-right: 10px;
  }

  > input {
    width: 100%;
    height: 56px;
    padding: 12px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: transparent;
    border: none;

    &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
    
  }
`;