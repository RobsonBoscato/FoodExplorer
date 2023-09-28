import { BrowserRouter } from "react-router-dom";

import { AdminRoutes } from "./Admin.routes";
import { CostumerRoutes } from "./Costumer.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
	return (
		<BrowserRouter>
			<AdminRoutes />
		</BrowserRouter>
	);
}
