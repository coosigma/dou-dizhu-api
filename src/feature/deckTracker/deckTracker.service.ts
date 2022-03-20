import { Injectable } from '@nestjs/common';
import Deck from '@model/deck';
import { CardFigure, CardSuit } from '@model/card';

@Injectable()
export class DeckTrackerService {
	private deck: Deck;

	public getOrCreateDeck(): Deck {
		if (!this.deck) {
			this.deck = {
				leftoverForLord: [undefined, undefined, undefined],
				wholeDeck: [],
			};
			for (let figure = 0; figure < Object.keys(CardFigure).length / 2; ++figure) {
				this.deck.wholeDeck[figure] = [];
				if (figure >= CardFigure.GreyJoker) {
					this.deck.wholeDeck[figure][0] = true;
				} else {
					for (let suit = 0; suit < Object.keys(CardSuit).length / 2; ++suit) {
						this.deck.wholeDeck[figure][suit] = true;
					}
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
