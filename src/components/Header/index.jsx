import { Container, Dot, Navbar } from "./styles";
import polygon from "../../assets/svg/Polygon.svg"
import Receipt from "../../assets/svg/Receipt.svg"
import Menu from "../../assets/svg/Menu.svg"

export function Header(){
  return (
    <Container>
      <Navbar>
        <img 
          id="menu"
          src={Menu} 
          alt="shortcut button to open the menu" 
        />
          
        <img 
          id="polygon"
          src={polygon} 
          alt="blue polygon logo for FoodExplorer" 
        />

        <p>food explorer</p>
        <img 
          id="receipt"
          src={Receipt} 
          alt="shortcut for receipt details" 
        />

        <Dot>&nbsp;0</Dot>

      </Navbar>

    </Container>
  )
}