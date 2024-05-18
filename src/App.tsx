import "./App.css";

import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useTheme } from "./hooks/useTheme";
import Init from "./init/Init";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Init />,
	},
]);

function App() {
	const { theme } = useTheme();

	useEffect(() => {
		document.documentElement.setAttribute("theme", theme);
	}, [theme]);

	return <RouterProvider router={router} />;
}

export default App;
