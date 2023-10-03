import { Container, Dot, Navbar } from "./styles";
import polygon from "../../assets/svg/Polygon.svg";
import Receipt from "../../assets/svg/Receipt.svg";
import Menu from "../../assets/svg/Menu.svg";
import { Link } from "react-router-dom";

const MOCKUSER = {
	name: "TESTE",
	isAdmin: true,
};

export function Header() {
	const isAdmin = (user) => {
		return user.isAdmin;
	};

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
				{isAdmin(MOCKUSER) ? (
					<span>admin</span>
				) : (
					<>
						<img id="receipt" src={Receipt} alt="shortcut for receipt details" />
						<Dot>&nbsp;0</Dot>
					</>
				)}
			</Navbar>
		</Container>
	);
}
