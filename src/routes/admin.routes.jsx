import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { DishDetails } from "../pages/Details";
import { NewPlate } from "../pages/NewPlate";
import { EditPlate } from "../pages/EditPlate";

export function AdminRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/plates/:id" element={<DishDetails />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/newplate" element={<NewPlate />} />
			<Route path="/editplate/:id" element={<EditPlate />} />
		</Routes>
	);
}
