import "./app.css";

import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useTheme } from "./hooks/useTheme";
import StartView from "./start/start-view.tsx";
import AudioPlayer from "./components/audio-player.tsx";
import SoundProvider from "./providers/sound-provider.tsx";

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
