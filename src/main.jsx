import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./pages/Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

import { Routes } from "./routes";

import theme from "./pages/Styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	</React.StrictMode>
);
