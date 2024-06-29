import { createContext } from "react";

import { Action, Sound, SoundContextType } from "./soundContextType";

const INITIAL_VALUE: SoundContextType = {
	sound: {} as Sound,
	action: {} as Action,
};

export const SoundContext = createContext<SoundContextType>(INITIAL_VALUE);
