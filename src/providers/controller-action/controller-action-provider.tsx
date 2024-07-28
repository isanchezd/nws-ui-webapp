import { createContext, ReactElement, ReactNode, useEffect, useState } from "react";

import { Buttons } from "../../constants/gamepad.ts";
import useGamePad from "../../hooks/useGamePad.ts";
import { Action, ControllerContextType } from "./controller-context-type.ts";

type ThemeProviderProps = {
	children: ReactNode;
};

const INITITAL_STATE = {
	action: null,
};

const ControllerActionContext = createContext<ControllerContextType>(INITITAL_STATE);

function ControllerActionProvider({ children }: ThemeProviderProps): ReactElement {
	const [action, setAction] = useState<Action>({} as Action);
	const { gamepad } = useGamePad();

	useEffect(() => {
		//BUTTON: A
		if (gamepad?.buttons[0].pressed) {
			const id: number = new Date().getTime();
			setAction(() => ({
				id,
				name: Buttons.A,
			}));
		}
	}, [gamepad]);

	return (
		<ControllerActionContext.Provider value={{ action }}>
			{children}
		</ControllerActionContext.Provider>
	);
}

export { ControllerActionContext, ControllerActionProvider };
