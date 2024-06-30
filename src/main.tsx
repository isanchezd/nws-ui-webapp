import "./styles/main.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app.tsx";
import SoundProvider from "./providers/sound-provider.tsx";
import ThemeProvider from "./providers/theme-provider.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<SoundProvider>
				<App />
			</SoundProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
