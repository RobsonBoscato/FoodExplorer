import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PlateDetails } from "../mocks/PlateDetails";
import { Session } from "../Home/styles";
import DishCard from ".";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function Details() {
	const [dishes, setDishes] = useState([]);

	useEffect(() => {
		async function dishDetail() {
			const response = await api.get(`/plates/1`);
			setDishes(Object.values(response.data));
		}
		dishDetail();
	}, []);

	return (
		<Container>
			<Header />
			<Session>
				{dishes.map((dish) => console.log("here"))}
				{/* // 	<DishCard
				// 		key={dish.id}
				// 		id={dish.id}
				// 		name={dish.name}
				// 		description={dish.description}
				// 		tags={dish.tags}
				// 		price={dish.price}
				// 	/>
				// ))} */}
			</Session>
			<Footer />
		</Container>
	);
}
