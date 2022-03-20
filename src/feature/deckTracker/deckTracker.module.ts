import { Module } from '@nestjs/common';
import { DeckTrackerController } from './deckTracker.controller';
import { DeckTrackerService } from './deckTracker.service';

@Module({
	controllers: [DeckTrackerController],
	providers: [DeckTrackerService],
	exports: [DeckTrackerService],
})
export class DeckTrackerModule {}
