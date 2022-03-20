import { Sequelize } from 'sequelize-typescript';
import { configurationType } from '@provider/config/cfg-factory';
import { Configuration } from '@provider/config/configuration';
import { DbFactoryImpl } from './db-factory.impl';

export interface DbFactory {
	getOrCreateConnection(): Promise<Sequelize>;
}

export const databaseSymbol = Symbol('Database');

export const databaseFactory = {
	provide: databaseSymbol,
	useFactory: async (configuration: Configuration) => {
		const database = new DbFactoryImpl(configuration);
		return await database.getOrCreateConnection();
	},
	inject: [configurationType],
};
