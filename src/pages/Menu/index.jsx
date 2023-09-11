import { Footer } from "../../components/Footer";
import { Container, Navbar, SearchInput, Session, Heading } from "./styles";
import close from "../../assets/svg/close.svg";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";

export function Menu() {
	return (
		<Container>
			<Navbar>
				<Heading>
					<img
						id="close"
						src={close}
						alt="close button of search field"
						title="Menu"
					/>
					<span>Menu</span>
				</Heading>
			</Navbar>

			<Session>
				<Input
					icon={FiSearch}
					placeholder="Search for appetizers, meals or ingredients"
				/>
				<span>Sair</span>
			</Session>

			<Footer />
		</Container>
	);
}
