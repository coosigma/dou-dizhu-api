import Card from './card';

export default interface Deck {
	leftoverForLord: [Card, Card, Card];
	wholeDeck: boolean[][];
}
