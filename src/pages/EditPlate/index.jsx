import { Container, Section, Form, Heading, ButtonsBox } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import Uploadimage from "../../assets/svg/UploadImage.svg";
import backSignal from "../../assets/svg/backSignal.svg";

import { Link, useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function EditPlate() {
	const params = useParams();
	const navigate = useNavigate();

	const [dish, setDish] = useState({});

	const [category, setCategory] = useState();
	const [name, setName] = useState();
	const [image, setImage] = useState("");
	const [price, setPrice] = useState();
	const [description, setDescription] = useState();

	const [tags, setTags] = useState([]);
	const [newIngredient, setNewIngredient] = useState("");

	dish.name = name ?? dish.name;
	dish.description = description ?? dish.description;
	dish.image = image ?? dish.image;
	dish.price = price ?? dish.price;
	dish.category = category ?? dish.category;

	// function handleRemoveIngredient(deleted) {
	// 	setTags((prevState) =>
	// 		prevState.filter((ingredient) => ingredient !== deleted)
	// 	);
	// }

	// function handleAddIngredient() {
	// 	setTags((prevState) => [...prevState, newIngredient]);

	// 	setNewIngredient("");
	// }

	async function handleUpdateDish() {
		const dishForm = new FormData();

		dishForm.append("name", dish.name);
		dishForm.append("price", dish.price);
		dishForm.append("description", dish.description);
		dishForm.append("category", dish.category);
		dishForm.append("tags", JSON.stringify(tags));

		{
			image ? dishForm.append("image", image) : false;
		}

		try {
			const response = await api.patch(`/plates/${params.id}`, dishForm);

			alert(response.data);

			navigate("/");
		} catch (err) {
			if (err.response) {
				alert(err.response.data.message);
			} else {
				alert("Couldn't update the current plate.");
			}
		}
	}

	async function handleDeleteDish() {
		const confirmDelete = confirm("Are you sure you want to delete this plate?");
		if (confirmDelete) {
			try {
				await api.delete(`/plates/${params.id}`);

				alert("Dish successfully deleted.");

				navigate("/");
			} catch (err) {
				if (err.response) {
					alert(err.response.data.message);
				} else {
					alert("Was not able to delete the dish, please try again.");
				}
			}
		}
	}

	useEffect(() => {
		async function handleDish() {
			const response = await api.get(`/plates/${params.id}`);

			setDish(response.data);
		}

		async function handleTags() {
			const response = await api.get(`/tags/${params.id}`);

			setTags(response.data);
		}

		handleDish();
		handleTags();
	}, []);

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
						onClick={() => navigate("/")}
					/>
					<span onClick={() => navigate("/")}>return</span>
				</Heading>
				<p>Edit plate</p>
				<Form>
					<p>Plate image</p>
					<label htmlFor="upload">
						<p>Select an image</p>
						<img src={Uploadimage} alt="upload arrow" />
						<input
							id="upload"
							type="file"
							onChange={(e) => setImage(e.target.files[0])}
						/>
					</label>

					<label id="second" htmlFor="name">
						Name
					</label>
					<Input
						type="text"
						placeholder="Ex.: Ceasar Salad"
						defaultValue={dish.name}
						id="name"
						onChange={(e) => setName(e.target.value)}
					></Input>

					<p>Category</p>
					<select
						name="Category"
						defaultValue={dish.category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option name="Appetizers">Appetizers</option>
						<option name="Meals">Meals</option>
						<option name="Desserts">Desserts</option>
					</select>

					<label htmlFor="Ingredients">Ingredients</label>
					<Input
						type="text"
						placeholder="Ingredients"
						defaultValue={dish.tags}
						id="Ingredients"
						onChange={(e) => setTags(e.target.value)}
					></Input>

					<label htmlFor="price">Price</label>
					<Input
						type="text"
						placeholder="R$ 00,00"
						defaultValue={dish.price}
						id="price"
						onChange={(e) => setPrice(e.target.value)}
					></Input>

					<label htmlFor="description">Description</label>
					<Input
						type="textarea"
						placeholder="Describe the dish, the ingredients and composition."
						id="description"
						defaultValue={dish.description}
						onChange={(e) => setDescription(e.target.value)}
					></Input>
					<ButtonsBox id="#buttons">
						<Button
							title={"Delete plate"}
							variant="secondary"
							onClick={handleDeleteDish}
						></Button>
						<Button
							title={"Save changes"}
							variant="primary"
							onClick={handleUpdateDish}
						></Button>
					</ButtonsBox>
				</Form>
			</Section>
			<Footer />
		</Container>
	);
}
