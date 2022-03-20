export enum CardSuit {
	Spade,
	Heart,
	Diamond,
	Club,
}

export enum CardFigure {
	Three,
	Four,
	Five,
	Six,
	Seven,
	Eight,
	Nine,
	Ten,
	Jack,
	Queen,
	King,
	Ace,
	Two,
	GreyJoker,
	ColouredJoker,
}

export default interface Card {
	suit?: CardSuit;
	figure: CardFigure;
}
