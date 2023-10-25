import { Footer } from "../../components/Footer";
import { Container, Navbar, SearchInput, Session, Heading } from "./styles";
import close from "../../assets/svg/Close.svg";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { useSearch } from "../../hooks/search";

import { isAdmin, useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Menu() {
	const { signOut } = useAuth();
	const navigation = useNavigate();

	function handleSignOut() {
		const confirmSignOut = confirm("Are you sure you want to sign out?");
		if (confirmSignOut) {
			signOut();
			navigation("/");
		}
	}

	const [plates, setPlates] = useState([]);
	const { search } = useSearch();

	useEffect(() => {
		async function fetchPlates() {
			const response = await api.get(`/plates?title=${search}`);

			setPlates(Object.values(response.data));
		}

		fetchPlates();
	}, [search]);

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
				{isAdmin() ? (
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
