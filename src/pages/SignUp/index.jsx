import { useState } from "react";
import { api } from "../../services/api";
import { Background, Container, Form } from "../SignUp/styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import polygon from "../../assets/svg/Polygon.svg";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	function handleSignUp() {
		if (!name || !email || !password) {
			return alert("All the fields are required.");
		}

		api
			.post("/users", { name, email, password })
			.then(() => {
				alert("User successfully created!"), navigate("/");
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert("ERROR, cannot create the user. Please try again");
				}
			});
	}
	return (
		<Container>
			<Background>
				<img src={polygon} alt="blue polygon logo for FoodExplorer" />
				<p>food explorer</p>
			</Background>

			<Form>
				{/* <h1>Create your account</h1> */}

				<span>Your name</span>
				<Input
					placeholder="Example: Michael Scotfield"
					type="text"
					onChange={(e) => setName(e.target.value)}
				/>

				<span>E-mail</span>
				<Input
					placeholder="Example: example@mail.com"
					type="e-mail"
					onChange={(e) => setEmail(e.target.value)}
				/>

				<span>Password</span>
				<Input
					placeholder="Minimum of 6 characters"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button onClick={handleSignUp} title="Create new account" />

				<Link to="/">
					<strong>Already have an account ?</strong>
				</Link>
			</Form>
		</Container>
	);
}
