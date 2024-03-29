import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AdminRoutes } from "./admin.routes";
import { CustomerRoutes } from "./customer.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
	const { user } = useAuth();
	return (
		<BrowserRouter>
			{user ? (
				user.role === "admin" ? (
					<AdminRoutes />
				) : (
					<CustomerRoutes />
				)
			) : (
				<AuthRoutes />
			)}
		</BrowserRouter>
	);
}
