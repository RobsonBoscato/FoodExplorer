import { Container, Dot, Navbar } from "./styles";
import polygon from "../../assets/svg/Polygon.svg";
import Receipt from "../../assets/svg/Receipt.svg";
import Menu from "../../assets/svg/Menu.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

import { isAdmin, useAuth } from "../../hooks/auth";
import { Search } from "../Search";
import { useSearch } from "../../hooks/search";

export function Header() {
	const { signOut } = useAuth();
	const { tagsSearch, search, checkURL, setCheckURL } = useSearch();

	const navigate = useNavigate();

	function handleSignOut() {
		const confirmSignOut = confirm("Tem certeza que deseja sair?");
		if (confirmSignOut) {
			signOut();

			navigate("/");
		}
	}

	function handleNavigate(menu) {
		navigate(menu);
	}

	function handleSearch() {
		if (checkURL) {
			navigate("/");
			setCheckURL(false);
		}
	}

	return (
		<Container>
			{isAdmin() ? (
				<Navbar className="admin">
					<Link to="/menu">
						<button className="menu">
							<img
								className="menu"
								src={Menu}
								alt="shortcut button to open the menu"
								onClick={() => handleNavigate("/menu")}
							/>
						</button>
					</Link>

					<Link to="/">
						<img
							id="polygon"
							src={polygon}
							alt="blue polygon logo for FoodExplorer"
						/>
						<p>food explorer</p>
					</Link>

					<span>admin</span>
					<Search
						defaultValue={search}
						onChange={(e) => tagsSearch(e.target.value)}
						onKeyDown={(e) => (e.key == "Enter" ? handleSearch() : false)}
					/>

					<Button
						title="New Dish"
						className="order"
						onClick={() => handleNavigate("/newplate")}
					/>

					<button type="button" className="logout" onClick={handleSignOut}>
						<svg
							width="25"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.2891 6.75L23.5391 12M23.5391 12L18.2891 17.25M23.5391 12H9.53906M9.53906 23H2.53906C2.27385 23 2.01949 22.8946 1.83196 22.7071C1.64442 22.5196 1.53906 22.2652 1.53906 22V2C1.53906 1.73478 1.64442 1.48043 1.83196 1.29289C2.01949 1.10536 2.27385 1 2.53906 1H9.53906"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</Navbar>
			) : (
				<Navbar className="user">
					<button className="menu">
						<img
							id="menu"
							src={Menu}
							alt="shortcut button to open the menu"
							onClick={() => navigate("/menu")}
						/>
					</button>
					<Link to="/">
						<img
							id="polygon"
							src={polygon}
							alt="blue polygon logo for FoodExplorer"
						/>
						<p>food explorer</p>
					</Link>

					<Search
						defaultValue={search}
						onChange={(e) => tagsSearch(e.target.value)}
						onKeyDown={(e) => (e.key == "Enter" ? handleSearch() : false)}
					/>

					<Button type="button" className="receipt">
						<img src={Receipt} />
						<span className="mobile">0</span>
						<span className="desktop">Orders (0)</span>
					</Button>

					<button type="button" className="logout" onClick={handleSignOut}>
						<svg
							width="25"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.2891 6.75L23.5391 12M23.5391 12L18.2891 17.25M23.5391 12H9.53906M9.53906 23H2.53906C2.27385 23 2.01949 22.8946 1.83196 22.7071C1.64442 22.5196 1.53906 22.2652 1.53906 22V2C1.53906 1.73478 1.64442 1.48043 1.83196 1.29289C2.01949 1.10536 2.27385 1 2.53906 1H9.53906"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</Navbar>
			)}
		</Container>
	);
}
