import { Container } from "./styles";
import logo from "../../assets/svg/Polygon Gray.svg";

export function Footer() {
	return (
		<Container>
			<img src={logo} alt="" /> <p> food explorer</p>
			<span>© 2023 - All rights reserved.</span>
		</Container>
	);
}
