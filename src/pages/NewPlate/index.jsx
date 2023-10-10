import { AdminHeader } from "../../components/AdminHeader";
import { Footer } from "../../components/Footer";
import { Container, Section, Form, Heading, SectionTags } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TagItem } from "../../components/TagItem";
import Uploadimage from "../../assets/svg/UploadImage.svg";
import { Link } from "react-router-dom";
import backSignal from "../../assets/svg/backSignal.svg";

import { useState } from "react";

export function NewPlate() {
	// const [image, setImage] = useState("");
	// const [title, setTitle] = useState("");
	// const [category, setCategory] = useState("");
	// const [price, setPrice] = useState("");
	// const [description, setDescription] = useState("");

	const [tags, setTags] = useState([]);
	const [newTag, setNewTag] = useState("");

	function handleAddTag() {
		setTags((prevState) => [...prevState, newTag]);
		console.log(newTag);
		setNewTag("");
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
						<option name="Meals">Meals</option>
						<option name="Desserts">Desserts</option>
					</select>

					<label htmlFor="Ingredients">Ingredients</label>

					<SectionTags>
						{tags.map((tag, index) => (
							<TagItem key={String(index)} value={tag} onClick={() => {}} />
						))}

						<TagItem
							isNew
							placeholder="Addition"
							onChange={(e) => setNewTag(e.target.value)}
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
					<Button title={"Save changes"} variant="primary"></Button>
				</Form>
			</Section>
			<Footer />
		</Container>
	);
}
