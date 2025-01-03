import "./app.css";

import { useEffect } from "react";

import AudioPlayer from "./components/audio-player.tsx";
import useTheme from "./hooks/useTheme";
import { ControllerActionProvider } from "./providers/controller-action/controller-action-provider.tsx";
import { SoundProvider } from "./providers/sound/sound-provider.tsx";
import StartView from "./start/start-view.tsx";

function App() {
	const { theme } = useTheme();

	useEffect(() => {
		document.documentElement.setAttribute("theme", theme);
	}, [theme]);

	return (
		<main>
			<ControllerActionProvider>
				<SoundProvider>
					<StartView />
					<AudioPlayer />
				</SoundProvider>
			</ControllerActionProvider>
		</main>
	);
}

export default App;
