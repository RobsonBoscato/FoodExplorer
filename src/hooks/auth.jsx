import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [data, setData] = useState({});

	async function signIn({ email, password }) {
		try {
			const response = await api.post("/sessions", { email, password });
			const { user, token } = response.data;

			localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
			localStorage.setItem("@foodexplorer:token", token);

			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

			setData({ user, token });
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Couldn't login. Please try again");
			}
		}
	}

	function signOut() {
		localStorage.removeItem("@foodexplorer:token");
		localStorage.removeItem("@foodexplorer:user");

		setData({});
	}

	async function createNewPlate({ plate }) {
		try {
			await api.put;
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Couldn't create the new plate. Please try again");
			}
		}
	}

	useEffect(() => {
		const token = localStorage.getItem("@foodexplorer:token");
		const user = localStorage.getItem("@foodexplorer:user");

		if (token && user) {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

			setData({
				token,
				user: JSON.parse(user),
			});
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				user: data.user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	return context;
}

function isAdmin() {
	const { user } = useAuth();
	return user.role === "admin";
}

export { AuthProvider, useAuth, isAdmin };
