import { Container, Dot, Navbar } from "./styles";
import polygon from "../../assets/svg/Polygon.svg";
import Receipt from "../../assets/svg/Receipt.svg";
import Menu from "../../assets/svg/Menu.svg";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

let profile;
function profileRole() {
	const { user } = useAuth();
	if (user.role === "admin") {
		profile = "admin";
		return user.role;
	} else {
		profile = "customer";
		return user.role;
	}
}

export function Header() {
	profileRole();

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

				{profile == "admin" ? (
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

export { profileRole };
