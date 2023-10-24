import { Header } from "../../components/Header";
import { Container, Section, Form, Heading, ButtonsBox } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import Uploadimage from "../../assets/svg/UploadImage.svg";
import { Link } from "react-router-dom";
import backSignal from "../../assets/svg/backSignal.svg";

export function EditPlate() {
	return (
		<Container>
			<Header />
			<Section>
				<Heading>
					<Link to="/" />
					<img
						id="arrow"
						src={backSignal}
						alt="return button to main page"
						title="return"
					/>
					<span>return</span>
				</Heading>
				<p>Edit plate</p>
				<Form>
					<p>Plate image</p>
					<label htmlFor="upload">
						<p>Select an image</p>
						<img src={Uploadimage} alt="upload arrow" />
						<input id="upload" type="file" />
					</label>

					<label id="second" htmlFor="name">
						Name
					</label>
					<Input type="text" placeholder="Ex.: Ceasar Salad" id="name"></Input>

					<p>Category</p>
					<select name="Category">
						<option name="Appetizers">Appetizers</option>
						<option name="Meals">Meals</option>
						<option name="Desserts">Desserts</option>
					</select>

					<label htmlFor="Ingredients">Ingredients</label>
					<Input type="text" placeholder="Ingredients " id="Ingredients"></Input>

					<label htmlFor="price">Price</label>
					<Input type="text" placeholder="R$ 00,00" id="price"></Input>

					<label htmlFor="description">Description</label>
					<Input
						type="textarea"
						placeholder="Describe the dish, the ingredients and composition."
						id="description"
					></Input>
					<ButtonsBox id="#buttons">
						<Button title={"Delete plate"} variant="secondary"></Button>
						<Button title={"Save changes"} variant="primary"></Button>
					</ButtonsBox>
				</Form>
			</Section>
			<Footer />
		</Container>
	);
}
