import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Configuration } from '@service/config/configuration';
import { configurationType } from '@service/config/cfg-factory';
import { DbFactory } from './db-factory';
import { Dialect } from 'sequelize/types';

@Injectable()
export class DbFactoryImpl implements DbFactory {
	private connection: Sequelize;

	constructor(@Inject(configurationType) private config: Configuration) {}

	public async getOrCreateConnection(): Promise<Sequelize> {
		if (!this.connection) {
			const { dialect, ...rest } = this.config.db;
			const typedConfig = {
				dialect: dialect as Dialect,
				...rest,
			};

			this.connection = new Sequelize(typedConfig);
			this.connection.addModels(['@service/model/*']);
		}
		this.connection.sync();
		return this.connection;
	}
}
