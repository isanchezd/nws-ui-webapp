import { RefObject, useEffect, useRef, useState } from "react";

import useControllerActions from "../hooks/useControllerActions.ts";
import useSound from "../hooks/useSound.ts";

function AudioPlayer() {
	const { sound } = useSound();
	const { action } = useControllerActions();
	const [audioFile, setAudioFile] = useState("");
	const audioRef: RefObject<HTMLAudioElement> = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		if (action) {
			if (action.id) {
				play(audioRef);
			}
		}
	}, [action, audioFile]);

	useEffect(() => {
		if (sound.name) {
			setAudioFile(sound.name);
		}
	}, [sound]);

	return (
		<>
			{audioFile ? (
				<audio ref={audioRef} controls>
					<source src={`audio/${audioFile}.mp3`} type="audio/mp3" />
					Your browser does not support the audio element.
				</audio>
			) : null}
		</>
	);
}

function play(audio: RefObject<HTMLAudioElement>): void {
	audio.current
		?.play()
		// eslint-disable-next-line no-console
		.then(() => console.log("play"))
		.catch((error) => console.error(error));
}

export default AudioPlayer;
