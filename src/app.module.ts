import { Module } from '@nestjs/common';
import { AppController } from '@controller/app.controller';
import { AppService } from '@provider/core/app.service';
import { configurationFactory } from '@provider/config/cfg-factory';
import { databaseFactory } from '@provider/db/db-factory';
import { DeckTrackerModule } from '@feature/deckTracker/deckTracker.module';

@Module({
	imports: [DeckTrackerModule],
	controllers: [AppController],
	providers: [AppService, configurationFactory, databaseFactory],
})
export class AppModule {}
