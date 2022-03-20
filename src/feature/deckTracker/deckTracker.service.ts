import { Injectable } from '@nestjs/common';
import Deck from '@model/deck';
import { CardFigure } from '@model/card';

@Injectable()
export class DeckTrackerService {
	private deck: Deck;

	public getOrCreateDeck(): Deck {
		if (!this.deck) {
			this.deck = {
				wholeDeck: new Map<string, number>(),
			};
			for (let figure = 0; figure < Object.keys(CardFigure).length / 2; ++figure) {
				if (figure >= CardFigure.GreyJoker) {
					this.deck.wholeDeck[CardFigure[figure]] = 1;
				} else {
					this.deck.wholeDeck[CardFigure[figure]] = 4;
				}
			}
		}

		return this.deck;
	}

	public resetDeck(): Deck {
		this.deck = undefined;
		return this.getOrCreateDeck();
	}
}
