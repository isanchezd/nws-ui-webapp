import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useGamePad(): { gamepad: Gamepad | null } {
	const [gamepad, setGamepad] = useState<Gamepad | null>(null);

	useEffect(() => {
		window.addEventListener("gamepadconnected", handleConnectedGamePad);
		window.addEventListener("gamepaddisconnected", handleDisconnectedGamePad);

		let animationFrameId: number;
		const updateLoop = () => {
			animationFrameId = updateGamepadStatus(setGamepad);
		};
		updateLoop();

		return (): void => {
			window.removeEventListener("gamepadconnected", handleConnectedGamePad);
			window.removeEventListener("gamepaddisconnected", handleDisconnectedGamePad);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return { gamepad };
}

function handleConnectedGamePad(event: GamepadEvent) {
	// eslint-disable-next-line no-console
	console.log(
		"Gamepad connected at index %d: %s. %d buttons, %d axes.",
		event.gamepad.index,
		event.gamepad.id,
		event.gamepad.buttons.length,
		event.gamepad.axes.length,
	);
}

function handleDisconnectedGamePad(event: GamepadEvent) {
	// eslint-disable-next-line no-console
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
	const connectedGamepad = gamepads[0];

	if (connectedGamepad) {
		setGamepad(connectedGamepad);
	}

	return requestAnimationFrame(() => updateGamepadStatus(setGamepad));
}

export default useGamePad;
