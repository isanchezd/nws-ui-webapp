import "./App.css";

import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useTheme } from "./hooks/useTheme";
import StartView from "./start/StartView";

const router = createBrowserRouter([
	{
		path: "/",
		element: <StartView />,
	},
]);

function App() {
	const { theme } = useTheme();

	useEffect(() => {
		document.documentElement.setAttribute("theme", theme);
	}, [theme]);

	return (
		<main>
			<RouterProvider router={router} />
		</main>
	);
}

export default App;
