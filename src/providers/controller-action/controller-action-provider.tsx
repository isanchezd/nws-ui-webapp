import { createContext, ReactElement, ReactNode, useEffect, useRef, useState } from "react";

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
	const previousButtonStates = useRef<Record<number, Action | null>>({});

	const handleButtonPress = (buttonIndex: number, buttonName: Buttons) => {
		if (!gamepad) {
			return;
		}

		if (gamepad.buttons[buttonIndex]?.pressed) {
			const newAction = {
				id: new Date().getTime(),
				name: buttonName,
			};

			if (
				!previousButtonStates.current[buttonIndex] ||
				previousButtonStates.current[buttonIndex].name !== buttonName
			) {
				previousButtonStates.current[buttonIndex] = newAction;
				setAction(newAction);
			}
		} else {
			previousButtonStates.current[buttonIndex] = null;
		}
	};

	useEffect(() => {
		handleButtonPress(0, Buttons.A); // A
		handleButtonPress(1, Buttons.B); // B
	}, [gamepad]);

	return (
		<ControllerActionContext.Provider value={{ action }}>
			{children}
		</ControllerActionContext.Provider>
	);
}

export { ControllerActionContext, ControllerActionProvider };
