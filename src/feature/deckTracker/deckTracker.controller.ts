import { Controller, Get, Post } from '@nestjs/common';
import { DeckTrackerService } from './deckTracker.service';
import Deck from '@model/deck';

@Controller('deck')
export class DeckTrackerController {
	constructor(private readonly dtService: DeckTrackerService) {}

	@Get()
	getDeck(): Deck {
		return this.dtService.getOrCreateDeck();
	}

	@Post('init')
	init(): Deck {
		return this.dtService.resetDeck();
	}
}
