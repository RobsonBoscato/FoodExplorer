import { Header } from "../../components/Header";
import macaroon from "../../assets/png/macaroons.png";
import {
	Background,
	Card,
	Container,
	Heading,
	Session,
	TextBox,
	CardBuy,
} from "./styles.js";
import { Footer } from "../../components/Footer";
import { plates } from "../mocks/plates";
import PlateCard from "./PlateCard";

export function Home() {
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
      <p>Refeições</p>

			<Session>
				{plates.map((plate) => (
					<PlateCard
						key={plate.id}
						id={plate.id}
						picture={plate.picture}
						description={plate.description}
						price={plate.price}
					/>      
				))}
			</Session>

      <p>Pratos principais</p>
			<Session>
				{plates.map((plate) => (
					<PlateCard
						key={plate.id}
						id={plate.id}
						picture={plate.picture}
						description={plate.description}
						price={plate.price}
					/>       
				))}

			</Session>
      <p>Pratos principais</p>
			<Session>
				{plates.map((plate) => (
					<PlateCard
						key={plate.id}
						id={plate.id}
						picture={plate.picture}
						description={plate.description}
					/>               
				))}
			</Session>

			<Footer />
		</Container>
	);
}
