import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_400};
`

export const span = styled.div`
  color: var(--light-light-300, #E1E1E6);
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
`

export const Heading = styled.div`
  display: flex;
  margin: 56px 28px 24px 28px;
  align-items: center;
  gap: 16px;

  > #close {
    width: 18px;
    height: 18px;
  } 
`
export const Session = styled.div`
  display: flex;
  padding: 30px;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;

  > a {

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
  }
`

export const SearchInput = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BD_DARK_900};
  border-radius: 8px;
  `
export const Navbar = styled.nav`
  font-size: 21px;
  flex-shrink: 0;
  
` 