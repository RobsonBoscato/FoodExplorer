import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useState } from "react";

import { Background, Container, Form } from "./styles";
import polygon from "../../assets/svg/polygon.svg";

import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signIn } = useAuth();

	function handleSignIn() {
		signIn({ email, password });
	}
	return (
		<Container>
			<Background>
				<img src={polygon} alt="blue polygon logo for FoodExplorer" />
				<p>food explorer</p>
			</Background>

			<Form>
				<span>E-mail</span>
				<Input
					type="email"
					placeholder="Example: example@mail.com"
					onChange={(e) => setEmail(e.target.value)}
				/>

				<span>Password</span>
				<Input
					type="password"
					placeholder="Minimun of 6 characters"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button title={"Login"} onClick={handleSignIn} />
				<Link to={"/register"}>
					<strong>Create an account</strong>
				</Link>
			</Form>
		</Container>
	);
}
