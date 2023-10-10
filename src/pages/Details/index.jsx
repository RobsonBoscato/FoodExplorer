import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PlateDetails } from "../mocks/PlateDetails";
import { Session } from "../Home/styles";
import DishCard from "./DishDetails";

export function Details() {
	return (
		<Container>
			<Header />
			<Session>
				{PlateDetails.map((plate) => (
					<DishCard
						key={plate.id}
						id={plate.id}
						name={plate.name}
						description={plate.description}
						tags={plate.tags}
						price={plate.price}
					/>
				))}
			</Session>
			<Footer />
		</Container>
	);
}
