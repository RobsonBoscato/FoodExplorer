import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Details } from "../pages/Details";
import { AdminDetails } from "../pages/AdminDetails";
import { NewPlate } from "../pages/NewPlate";
import { EditPlate } from "../pages/EditPlate";

export function AdminRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/details/:id" element={<Details />} />
			<Route path="/admin/:id" element={<AdminDetails />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/newplate" element={<NewPlate />} />
			<Route path="/editplate/:id" element={<EditPlate />} />
		</Routes>
	);
}
