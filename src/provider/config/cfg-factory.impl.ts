import { Injectable } from '@nestjs/common';
import { CfgFactory } from './cfg-factory';
import { Configuration } from './configuration';
import configJson from './default.config.json';

@Injectable()
export class CfgFactoryImpl implements CfgFactory {
	private configuration: Configuration;

	public getOrCreateConfiguration(): Configuration {
		if (!this.configuration) {
			const typedConfig: unknown = configJson;
			this.configuration = typedConfig as Configuration;
		}

		return this.configuration;
	}
}
