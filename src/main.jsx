import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./pages/Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Menu } from "./pages/Menu";
import theme from "./pages/Styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Menu />
		</ThemeProvider>
	</React.StrictMode>
);
