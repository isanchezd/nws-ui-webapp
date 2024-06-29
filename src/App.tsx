import "./App.css";

import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useTheme } from "./hooks/useTheme";
import StartView from "./start/StartView";
import AudioPlayer from "./components/audioPlayer.tsx";
import SoundProvider from "./providers/soundProvider.tsx";

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
			<SoundProvider>
				<RouterProvider router={router} />
				<AudioPlayer />
			</SoundProvider>
		</main>
	);
}

export default App;
