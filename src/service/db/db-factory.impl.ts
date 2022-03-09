import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Configuration } from '@service/config/configuration';
import { configurationType } from '@service/config/cfg-factory';
import { DbFactory } from './db-factory';

@Injectable()
export class DbFactoryImpl implements DbFactory {
	private connection: Sequelize;

	constructor(@Inject(configurationType) private config: Configuration) {}

	public getOrCreateConnection(): Sequelize {
		if (!this.connection) {
			const config = this.config.db;
			this.connection = new Sequelize(config);
			this.connection.addModels(['@service/model/*']);
		}

		return this.connection;
	}
}
