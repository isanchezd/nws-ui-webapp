import { ReactNode, useEffect, useState } from "react";

import { AUDIO_ACTIONS, AUDIOS } from "../constants/audios.ts";
import { SoundContext } from "../context/soundContext/soundContext";
import { Action, Sound } from "../context/soundContext/soundContextType.ts";
import useGamePad from "../hooks/useGamePad.ts";

interface SoundProviderProps {
	children: ReactNode;
}

function SoundProvider({ children }: SoundProviderProps) {
	const [sound, setSound] = useState<Sound>({} as Sound);
	const [action, setAction] = useState<Action>({} as Action);
	const { gamepad } = useGamePad();

	useEffect(() => {
		if (gamepad?.buttons[0].pressed) {
			const id: number = new Date().getTime();
			setSound(() => ({
				id,
				sound: AUDIOS.enter,
			}));
			setAction(() => ({
				id,
				action: AUDIO_ACTIONS.play,
			}));
		}
	}, [gamepad]);

	return <SoundContext.Provider value={{ sound, action }}>{children}</SoundContext.Provider>;
}

export default SoundProvider;
