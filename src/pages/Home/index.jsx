import { Header } from "../../components/Header";
import macaroon from "../../assets/png/macaroons.png";
import { Background, Container, Heading, Session, TextBox } from "./styles.js";
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
			<p>Appetizers</p>

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

			<p> Main meals </p>
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
			<p>Desserts</p>
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
