import { Footer } from "../../components/Footer";
import { AdminHeader } from "../../components/AdminHeader";
import DishCard from "../Details/AdminDetails";
import { Session } from "./styles";
import { PlateDetails } from "../mocks/PlateDetails";
import { Container } from "./styles";

export function AdminDetails() {
	return (
		<Container>
			<AdminHeader />

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
