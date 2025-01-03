import { useContext } from "react";

import { SoundContextType } from "../providers/sound/sound-context-type";
import { SoundContext } from "../providers/sound/sound-provider";

function useSound(): SoundContextType {
	const context = useContext(SoundContext);

	return context;
}

export default useSound;
