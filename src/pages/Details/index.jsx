import { Tags, TextBox, CounterOrders, Container, Heading } from "./styles";

import { Header } from "../../components/Header";
import { Session } from "../Home/styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import backSignal from "../../assets/svg/backSignal.svg";
import plus from "../../assets/svg/Plus.svg";
import minus from "../../assets/svg/Minus.svg";
import { SmallButton } from "../../components/SmallButton";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";

import { isAdmin } from "../../hooks/auth";
import { SectionTags } from "../NewPlate/styles";

export function DishDetails() {
	const [dish, setDish] = useState([]);
	const [tags, setTags] = useState([]);

	const params = useParams();

	const image = `${api.defaults.baseURL}/files/${dish.image}`;

	useEffect(() => {
		async function fetchDish() {
			const response = await api.get(`/plates/${params.id}`);
			setDish(Object.values(response.data));
		}

		async function fetchTags() {
			const response = await api.get(`/tags/${params.id}`);
			setTags(Object.values(response.data));
		}

		fetchDish();
		fetchTags();
	}, []);

	return (
		<Container>
			<Header>
				<Link to="/">
					<img
						id="return"
						src={backSignal}
						alt="return button to main page"
						title="return"
					/>
					<span>return</span>
				</Link>
			</Header>

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
			<main>
				<Session className="order">
					{dish?.map(
						(dish) =>
							dish.id == params.id && (
								<div id="imgCard" key={dish.id}>
									<img
										src={`http://localhost:3333/files/${dish.image}`}
										onError={({ currentTarget }) => {
											currentTarget.onerror = null; // prevents looping
											currentTarget.src =
												"https://avatars.steamstatic.com/b5bd56c1aa4644a474a2e4972be27ef9e82e517e_full.jpg";
										}}
									/>

									<TextBox className="details">
										<p>{dish.title}</p>
										<span>{dish.description}</span>

										<SectionTags id="tagsBox">
											{tags?.map((tag) => (
												<Tags key={tag.id}> {tag.name}</Tags>
											))}
										</SectionTags>
										<div id="button-wrapper">
											{isAdmin() ? (
												<Link to="/" id="button-edit">
													<SmallButton
														id="button-wrapped"
														title={"Edit plate"}
													></SmallButton>
												</Link>
											) : (
												<CounterOrders>
													<img
														src={minus}
														alt="button to decrease the quantity at your order"
													/>
													<p>0</p>
													<img src={plus} alt="button to add dish to your order" />
													<SmallButton
														className="order"
														title={` order • R$ ${dish.price}`}
													/>
												</CounterOrders>
											)}
										</div>
									</TextBox>
								</div>
							)
					)}
				</Session>
			</main>
			<div className="footer-wrapper">
				<Footer />
			</div>
		</Container>
	);
}

export default DishDetails;
