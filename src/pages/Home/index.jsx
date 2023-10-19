import { Header } from "../../components/Header";
import macaroon from "../../assets/png/macaroons.png";
import { Background, Container, Heading, Session, TextBox } from "./styles.js";
import PlateCard from "./PlateCard";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { DishCarousel } from "../../components/Carousel";

export function Home() {
	const [plates, setPlates] = useState([]);

	useEffect(() => {
		async function fetchPlates() {
			const response = await api.get("/plates");
			setPlates(Object.values(response.data));
		}
		fetchPlates();
	}, []);

	return (
		<Container>
			<Header />
			<Background />
			<Heading id="blue-bd">
				<img src={macaroon} alt="image of colorfull macaroons floating." />

				<TextBox>
					<h4>Sabores inigualáveis</h4>
					<p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
				</TextBox>
			</Heading>

			<Session>
				{plates.filter((plate) => plate.category === "Appetizers").length > 0 && (
					<DishCarousel title={"Appetizers"}>
						{plates ? (
							plates
								.filter((platesFilter) => platesFilter.category === "Appetizers")
								.map((plate) => (
									<PlateCard
										key={String(plate.id)}
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

			<Footer />
		</Container>
	);
}
