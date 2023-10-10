import { Footer } from "../../components/Footer";
import { Container, Navbar, SearchInput, Session, Heading } from "./styles";
import close from "../../assets/svg/close.svg";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { profileRole } from "../../components/Header";
import { useAuth } from "../../hooks/auth";

export function Menu() {
	const { signOut } = useAuth();
	const navigation = useNavigate();

	function handleSignOut() {
		signOut();
		navigation("/");
	}

	let profile = profileRole();

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
				{profile == "admin" ? (
					<Link to="/newplate">
						<span id="leave">Create a new plate</span>
					</Link>
				) : (
					<></>
				)}
				<Link to="/">
					<span id="leave">Close Menu</span>
				</Link>
				<br />
				<br />
				<Link to="/">
					<span id="signOut" onClick={handleSignOut}>
						Sign Out
					</span>
				</Link>
			</Session>

			<Footer />
		</Container>
	);
}
