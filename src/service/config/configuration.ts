import { SequelizeOptions } from 'sequelize-typescript';

export interface Configuration {
	db: {
		database: string;
		username: string;
		password: string;
		options?: SequelizeOptions;
	};
}

export const ConfigurationType = 'Configuration';
