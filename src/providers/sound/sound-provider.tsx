import { createContext, ReactNode, useEffect, useState } from "react";

import { AUDIOS } from "../../constants/audios.ts";
import { Buttons } from "../../constants/gamepad.ts";
import { useControllerActions } from "../../hooks/useControllerActions.ts";
import { Sound, SoundContextType } from "./sound-context-type.ts";

type SoundProviderProps = {
	children: ReactNode;
};

const INITIAL_VALUE: SoundContextType = {
	sound: {} as Sound,
};

const SoundContext = createContext<SoundContextType>(INITIAL_VALUE);

function SoundProvider({ children }: SoundProviderProps) {
	const [sound, setSound] = useState<Sound>({} as Sound);
	const { action } = useControllerActions();

	useEffect(() => {
		if (action) {
			if (action.name === Buttons.A) {
				const id: number = new Date().getTime();
				setSound(() => ({
					id,
					name: AUDIOS.enter,
				}));
			}

			if (action.name === Buttons.B) {
				const id: number = new Date().getTime();
				setSound(() => ({
					id,
					name: AUDIOS.enter,
				}));
			}
		}
	}, [action]);

	return <SoundContext.Provider value={{ sound }}>{children}</SoundContext.Provider>;
}

export { SoundContext, SoundProvider };
