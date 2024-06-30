import React, { useContext, useEffect, useRef } from "react";

import { AUDIO_ACTIONS } from "../constants/audios.ts";
import { SoundContext } from "../context/sound-context/sound-context.ts";
import { SoundContextType } from "../context/sound-context/sound-context-type.ts";

function AudioPlayer() {
	const { sound, action } = useContext<SoundContextType>(SoundContext);
	const audioRef: React.RefObject<HTMLAudioElement> = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		if (action.action === AUDIO_ACTIONS.play) {
			play(audioRef);
		}

		if (action.action === AUDIO_ACTIONS.stop) {
			stop(audioRef);
		}

		if (action.action === AUDIO_ACTIONS.pause) {
			pause(audioRef);
		}
	}, [action, sound]);

	return (
		<audio ref={audioRef}>
			<source src={`/audio/${sound.sound}.mp3`} type="audio/mp3" />
		</audio>
	);
}

function play(audio: React.RefObject<HTMLAudioElement>): void {
	audio.current
		?.play()
		.then()
		.catch((error) => console.error(error));
}

function stop(audio: React.RefObject<HTMLAudioElement>): void {
	audio.current?.pause();
	audio.current.currentTime = 0;
}

function pause(audio: React.RefObject<HTMLAudioElement>): void {
	audio.current?.pause();
}

export default AudioPlayer;
