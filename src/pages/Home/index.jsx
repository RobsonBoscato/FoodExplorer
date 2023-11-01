import { Header } from "../../components/Header";
import macaroon from "../../assets/png/macaroons.png";
import { Background, Container, Heading, Session, TextBox } from "./styles.js";
import PlateCard from "./PlateCard";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { DishCarousel } from "../../components/Carousel";

import { useSearch } from "../../hooks/search";

export function Home({ admin }) {
	const [plates, setPlates] = useState([]);
	const { search } = useSearch();

	useEffect(() => {
		async function fetchPlates() {
			const response = await api.get(`/plates?title=${search}`);

			setPlates(Object.values(response.data));
		}

		fetchPlates();
	}, [search]);

	return (
		<Container>
			<div className="main">
				<Header />
				<Background />
				<Heading id="blue-bd">
					<img src={macaroon} alt="image of colorfull macaroons floating." />

					<TextBox>
						<h4>Unparalleled flavors</h4>
						<p>
							Fell the deepest care taken with the ingredient selection and preparation
							with our dishes.
						</p>
					</TextBox>
				</Heading>

				<Session>
					{plates?.filter((plate) => plate.category === "Appetizers").length > 0 && (
						<DishCarousel title={"Appetizers"}>
							{plates ? (
								plates
									.filter((platesFilter) => platesFilter.category === "Appetizers")
									.map((plate) => (
										<PlateCard
											key={String(plate.id)}
											title={plate.title}
											id={plate.id}
											image={plate.image}
											description={plate.description}
											price={plate.price}
										></PlateCard>
									))
							) : (
								<h3>There's no dishes to show in this category.</h3>
							)}
						</DishCarousel>
					)}
				</Session>

				<Session>
					{plates.filter((plate) => plate.category === "Main meals").length > 0 && (
						<DishCarousel title={"Main meals"}>
							{plates ? (
								plates
									.filter((platesFilter) => platesFilter.category === "Main meals")
									.map((plate) => (
										<PlateCard
											key={String(plate.id)}
											title={plate.title}
											id={plate.id}
											image={plate.image}
											description={plate.description}
											price={plate.price}
										></PlateCard>
									))
							) : (
								<h3>There's no dishes to show in this category.</h3>
							)}
						</DishCarousel>
					)}
				</Session>

				<Session>
					{plates.filter((plate) => plate.category === "Desserts").length > 0 && (
						<DishCarousel title={"Desserts"}>
							{plates ? (
								plates
									.filter((platesFilter) => platesFilter.category === "Desserts")
									.map((plate) => (
										<PlateCard
											key={String(plate.id)}
											id={plate.id}
											title={plate.title}
											image={plate.image}
											description={plate.description}
											price={plate.price}
										></PlateCard>
									))
							) : (
								<h3>There's no dishes to show in this category.</h3>
							)}
						</DishCarousel>
					)}
				</Session>
				<Footer className="footer-wrapper" />
			</div>
		</Container>
	);
}
