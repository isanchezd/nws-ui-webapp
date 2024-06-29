export interface Sound {
	id: number;
	sound: string;
}

export interface Action {
	id: number;
	action: string;
}

export interface SoundContextType {
	sound: Sound;
	action: Action;
}
