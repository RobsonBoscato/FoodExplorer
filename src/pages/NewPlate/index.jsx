import { AdminHeader } from "../../components/AdminHeader";
import { Footer } from "../../components/Footer";
import { Container, Section, Form, Heading, SectionTags } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TagItem } from "../../components/TagItem";
import Uploadimage from "../../assets/svg/UploadImage.svg";
import { Link } from "react-router-dom";
import backSignal from "../../assets/svg/backSignal.svg";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useState } from "react";

export function NewPlate() {
	const navigation = useNavigate();
	// const [image, setImage] = useState("");
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState("");

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [tags, setTags] = useState([]);
	const [newTag, setNewTag] = useState("");

	function handleAddTag() {
		setTags((prevState) => [...prevState, newTag]);
		setNewTag("");
	}
	function handleRemoveTag(tagDeleted) {
		setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
	}

	async function handleNewPlate() {
		if (!title) {
			return alert("You should add a name for the plate, before saving.");
		}
		if (newTag) {
			return alert(
				"There's a tag pending to addition, delete or add it to proceed."
			);
		}
		if (!price) {
			return alert("To save, you should add a price for the meal.");
		}

		await api.post("/plates", {
			title,
			category,
			price,
			description,
			tags,
		});

		alert("New Plate sucessfully created!");

		navigation("/");
	}

	return (
		<Container>
			<AdminHeader />
			<Section>
				<Heading>
					<Link to="/">
						<img
							id="arrow"
							src={backSignal}
							alt="return button to main page"
							title="return"
						/>
					</Link>
					<span>return</span>
				</Heading>
				<p>New plate</p>
				<Form>
					<p>Plate image</p>
					<label htmlFor="upload">
						<p>Select an image to upload</p>
						<img src={Uploadimage} alt="upload arrow" />
						<input id="upload" type="file" />
					</label>
					<label id="second" htmlFor="name">
						Name{" "}
					</label>
					<Input
						type="text"
						placeholder="Ex.: Ceasar Salad"
						id="name"
						onChange={(e) => setTitle(e.target.value)}
					></Input>
					<p>Category</p>
					<select name="Category" onChange={(e) => setCategory(e.target.value)}>
						<option name="Appetizers">Appetizers</option>
						<option name="Main meals">Main meals</option>
						<option name="Desserts">Desserts</option>
					</select>

					<label htmlFor="Ingredients">Ingredients</label>

					<SectionTags>
						{tags.map((tag, index) => (
							<TagItem
								key={String(index)}
								value={tag}
								onClick={() => handleRemoveTag(tag)}
							/>
						))}

						<TagItem
							isNew
							placeholder="Addition"
							onChange={(e) => setNewTag(e.target.value)}
							value={newTag}
							onClick={handleAddTag}
						/>
					</SectionTags>

					<label htmlFor="price">Price</label>
					<Input
						type="text"
						placeholder="R$ 00,00"
						id="price"
						onChange={(e) => setPrice(e.target.value)}
					></Input>
					<label htmlFor="description">Description</label>
					<Input
						type="textarea"
						placeholder="Describe the dish, the ingredients and composition."
						id="description"
						onChange={(e) => setDescription(e.target.value)}
					></Input>
					<Button
						title={"Save changes"}
						variant="primary"
						onClick={handleNewPlate}
					></Button>
				</Form>
			</Section>
			<Footer />
		</Container>
	);
}
