import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useGamePad() {
	const [gamepad, setGamepad] = useState<Gamepad | null>(null);

	useEffect(() => {
		window.addEventListener("gamepadconnected", handleConnectedGamePad);
		window.addEventListener("gamepaddisconnected", handleDisconnectedGamePag);

		updateGamepadStatus(setGamepad);

		return (): void => {
			window.removeEventListener("gamepadconnected", handleConnectedGamePad);
			window.removeEventListener("gamepaddisconnected", handleDisconnectedGamePag);
		};
	}, []);

	return { gamepad };
}

function handleConnectedGamePad(event: GamepadEvent) {
	console.log(
		"Gamepad connected at index %d: %s. %d buttons, %d axes.",
		event.gamepad.index,
		event.gamepad.id,
		event.gamepad.buttons.length,
		event.gamepad.axes.length,
	);
}

function handleDisconnectedGamePag(event: GamepadEvent) {
	console.log(
		"Gamepad disconnected at index %d: %s. %d buttons, %d axes.",
		event.gamepad.index,
		event.gamepad.id,
		event.gamepad.buttons.length,
		event.gamepad.axes.length,
	);
}

function updateGamepadStatus(setGamepad: Dispatch<SetStateAction<Gamepad | null>>) {
	const gamepads = navigator.getGamepads();

	if (gamepads.length > 0) {
		const index = 0;
		const connectedGamepad = gamepads[index];
		if (connectedGamepad) {
			setGamepad(() => connectedGamepad);
		}
	}

	requestAnimationFrame(() => updateGamepadStatus(setGamepad));
}

export default useGamePad;
