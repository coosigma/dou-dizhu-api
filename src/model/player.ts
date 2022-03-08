import { Card } from '@model/card';

export enum PlayingRole {
	Landlord,
	Farmer,
}

export interface Player {
	id: string;
	name: string;
	role: PlayingRole;
	hand: Card[];
	multiplier: number;
}
