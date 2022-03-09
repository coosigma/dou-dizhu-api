import { Injectable } from '@nestjs/common';
import { Dialect } from 'sequelize/types';
import { CfgFactory } from './cfg-factory';
import { Configuration } from './configuration';
import configJson from './default.config.json';

@Injectable()
export class CfgFactoryImpl implements CfgFactory {
	private configuration: Configuration;

	public getOrCreateConfiguration(): Configuration {
		if (!this.configuration) {
			const typedConfig: Configuration = undefined;
			typedConfig.db.options.dialect = configJson.db.options.dialect as Dialect;
			this.configuration = typedConfig;
		}

		return this.configuration;
	}
}
