import { Buttons } from "../../constants/gamepad";

export type Action = {
	id: number;
	name: Buttons;
};

export type ControllerContextType = {
	action: Action | null;
};
