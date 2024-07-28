import "./app.css";

import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AudioPlayer from "./components/audio-player.tsx";
import { useTheme } from "./hooks/useTheme";
import { ControllerActionProvider } from "./providers/controller-action/controller-action-provider.tsx";
import { SoundProvider } from "./providers/sound/sound-provider.tsx";
import StartView from "./start/start-view.tsx";

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
			<ControllerActionProvider>
				<SoundProvider>
					<RouterProvider router={router} />
					<AudioPlayer />
				</SoundProvider>
			</ControllerActionProvider>
		</main>
	);
}

export default App;
