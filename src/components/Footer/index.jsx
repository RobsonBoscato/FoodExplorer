import { Container } from "./styles";
import logo from "../../assets/svg/Polygon Gray.svg";

export function Footer() {
	return (
		<Container>
			<div className="footerImg">
				<p>
					<img src={logo} alt="" />
					food explorer
				</p>
				<span>© 2023 - All rights reserved.</span>
			</div>
		</Container>
	);
}
