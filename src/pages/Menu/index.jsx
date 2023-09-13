import { Footer } from "../../components/Footer";
import { Container, Navbar, SearchInput, Session, Heading } from "./styles";
import close from "../../assets/svg/close.svg";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Menu() {
	return (
		<Container>
			<Navbar>
				<Heading>
					<Link to="/">
						<img
							id="close"
							src={close}
							alt="close button of search field"
							title="Menu"
						/>
					</Link>
					<span>Menu</span>
				</Heading>
			</Navbar>

			<Session>
				<Input
					icon={FiSearch}
					placeholder="Search for appetizers, meals or ingredients"
				/>
				<Link to="/">
					<span id="leave">Leave</span>
				</Link>
			</Session>

			<Footer />
		</Container>
	);
}
