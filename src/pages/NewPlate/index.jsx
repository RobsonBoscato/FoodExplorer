import { AdminHeader } from "../../components/AdminHeader";
import { Footer } from "../../components/Footer";
import { Container, Section, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function NewPlate() {
	return (
		<Container>
			<AdminHeader />
			<Section>
				<Form>
					<span>Upload plate image</span>
					<label htmlFor="avatar">
						<input id="avatar" type="file" />
					</label>
					{/* <Input type="file" placeholder="Select an image" /> */}
					<label for="name">Name</label>
					<Input type="text" placeholder="Ex.: Ceasar Salad" id="name"></Input>

					<p>Category</p>
					<select name="Category">
						<option name="Appetizers">Appetizers</option>
						<option name="Meals">Meals</option>
						<option name="Desserts">Desserts</option>
					</select>

					<label for="Ingredients">Ingredients</label>
					<Input type="text" placeholder="Ingredients " id="Ingredients"></Input>

					<label for="price">Price</label>
					<Input type="text" placeholder="R$ 00,00" id="price"></Input>

					<label for="description">Description</label>
					<Input
						type="textarea"
						placeholder="Describe the dish, the ingredients and composition."
						id="description"
					></Input>
					<Button title={"Save changes"} variant="primary"></Button>
				</Form>
			</Section>
			<Footer />
		</Container>
	);
}
