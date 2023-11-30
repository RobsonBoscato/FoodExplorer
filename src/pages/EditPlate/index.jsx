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
import { TagItem } from "../../components/TagItem";

export function EditPlate() {
	const params = useParams();
	const navigate = useNavigate();

	const [dish, setDish] = useState({});

	const [category, setCategory] = useState();
	const [title, setTitle] = useState();
	const [image, setImage] = useState("");
	const [price, setPrice] = useState();
	const [description, setDescription] = useState();

	const [tags, setTags] = useState([]);
	const [newIngredient, setNewIngredient] = useState("");

	dish.description = description ?? dish.description;
	dish.title = title ?? dish.title;
	dish.image = image ?? dish.image;
	dish.price = price ?? dish.price;
	dish.category = category ?? dish.category;

	function handleRemoveIngredient(deleted) {
		setTags((prevState) =>
			prevState.filter((ingredient) => ingredient !== deleted)
		);
	}

	function handleAddIngredient() {
		setTags((prevState) => [...prevState, newIngredient]);

		setNewIngredient("");
	}

	async function handleUpdateDish() {
		const dishForm = new FormData();

		dishForm.append("title", dish.title);
		dishForm.append("price", dish.price);
		dishForm.append("description", dish.description);
		dishForm.append("category", dish.category);
		dishForm.append("tags", JSON.stringify(tags));
		{
			image ? dishForm.append("image", image) : false;
		}

		try {
			const response = await api.put(`/plates/${params.id}`, dishForm);

			alert("Success", response);

			navigate(-1);
		} catch (err) {
			if (err.response) {
				alert(err.response.data.message);
			} else {
				alert("Couldn't update the current plate.");
			}
		}
	}

	async function handleDeletePlate() {
		const confirmDelete = confirm("Are you sure you want to delete this plate?");
		if (confirmDelete) {
			try {
				await api.delete(`/plates/${params.id}`);

				alert(`Dish id:${params.id}, was successfully deleted.`);

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
			// try {
			const response = await api.get(`/plates/${params.id}`);

			setDish(response.data[0]);
		}

		async function handleTags() {
			// try {
			const response = await api.get(`/tags/${params.id}`);
			// const { data } = response;

			setTags(response.data);
			// } catch (error) {
			// 	console.error("Error fetching tags:", error);
			// }
		}

		handleDish();
		handleTags();
	}, []);

	return (
		<Container>
			<Header />
			<Section>
				<Heading>
					<Link to={-1} />
					<img
						id="arrow"
						src={backSignal}
						alt="return button to main page"
						title="return"
						onClick={() => navigate(-1)}
					/>
					<span>return</span>
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
							accept="image/png, image/jpeg"
							name="image"
							onChange={(e) => setImage(e.target.files[0])}
						/>
					</label>

					<label id="second" htmlFor="name">
						Name
					</label>

					<Input
						type="text"
						placeholder="Ex.: Ceasar Salad"
						defaultValue={dish.title}
						id="name"
						onChange={(e) => setTitle(e.target.value)}
					></Input>

					<p>Category</p>

					<select name="Category" onChange={(e) => setCategory(e.target.value)}>
						<option value="Appetizers">Appetizers</option>
						<option value="Main meals">Main meals</option>
						<option value="Desserts">Desserts</option>
					</select>

					<label htmlFor="Ingredients">Ingredients</label>

					<div className="item">
						<div className="ingredients">
							<TagItem
								isNew
								placeholder="Adicionar"
								value={newIngredient}
								onChange={(e) => setNewIngredient(e.target.value)}
								onClick={handleAddIngredient}
							/>

							{tags.map((ingredient, index) => (
								<TagItem
									key={String(index)}
									value={ingredient.name || ingredient}
									onClick={() => handleRemoveIngredient(ingredient)}
								/>
							))}
						</div>
					</div>
					<label htmlFor="price">Price</label>

					<Input
						type="text"
						placeholder="R$ 24,00"
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
							onClick={handleDeletePlate}
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
