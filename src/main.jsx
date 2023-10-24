import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./pages/Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "./hooks/auth";

import { Routes } from "./routes";

import theme from "./pages/Styles/theme";
import { SearchProvider } from "./hooks/search";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AuthProvider>
				<SearchProvider>
					<Routes />
				</SearchProvider>
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
);
