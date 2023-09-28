import { Container, Navbar } from "./styles";
import polygon from "../../assets/svg/Polygon.svg";
import Menu from "../../assets/svg/Menu.svg";
import { Link } from "react-router-dom";

export function AdminHeader() {
	return (
		<Container>
			<Navbar>
				<Link to="/menu">
					<img id="menu" src={Menu} alt="shortcut button to open the menu" />
				</Link>
				<Link to="/">
					<img id="polygon" src={polygon} alt="blue polygon logo for FoodExplorer" />

					<p>food explorer</p>
				</Link>
				<span>admin</span>
			</Navbar>
		</Container>
	);
}
