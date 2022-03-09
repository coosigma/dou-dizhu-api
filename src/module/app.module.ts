import { Module } from '@nestjs/common';
import { AppController } from '@controller/app.controller';
import { AppService } from '@service/core/app.service';
import { configurationFactory } from '@service/config/cfg-factory';
import { databaseFactory } from '@service/db/db-factory';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService, configurationFactory, databaseFactory],
})
export class AppModule {}
