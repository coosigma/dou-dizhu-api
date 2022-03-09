import { Sequelize } from 'sequelize-typescript';
import { DbFactoryImpl } from './db-factory.impl';

export interface DbFactory {
	getOrCreateConnection(): Sequelize;
}

export const databaseSymbol = Symbol('Database');

export const databaseFactory = {
	provide: databaseSymbol,
	useFactory: (dbFactoryImpl: DbFactoryImpl) => {
		return dbFactoryImpl.getOrCreateConnection();
	},
	inject: [DbFactoryImpl],
};
