import { Container } from "./styled";
import logo from '../../assets/svg/Polygon Gray.svg'

export function Footer() {
  return (
    <Container>
      <img src={logo} alt="" /> <p> food explorer</p> <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}