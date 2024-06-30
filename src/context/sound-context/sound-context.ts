import { createContext } from "react";

import { Action, Sound, SoundContextType } from "./sound-context-type.ts";

const INITIAL_VALUE: SoundContextType = {
	sound: {} as Sound,
	action: {} as Action,
};

export const SoundContext = createContext<SoundContextType>(INITIAL_VALUE);
