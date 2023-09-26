import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import DishCard from "../Details/DishDetails";
import { Session } from "./styles";
import { PlateDetails } from "../mocks/PlateDetails";
import { Container } from "./styles";

export function AdminDetails() {
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
					/>
				))}
			</Session>

			<Footer />
		</Container>
	);
}
