import styled from 'styled-components'

export const Container = styled.div`  
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_900};
  
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
  
  >&placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 12px;
  }
    
`