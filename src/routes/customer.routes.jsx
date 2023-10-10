import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Menu } from "../pages/Menu";

export function CustomerRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/details/:id" element={<Details />} />
			<Route path="/menu" element={<Menu />} />
		</Routes>
	);
}