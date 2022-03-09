import { Configuration } from './configuration';
import { CfgFactoryImpl } from './cfg-factory.impl';

export interface CfgFactory {
	getOrCreateConfiguration(): Configuration;
}

export const configurationType = Symbol('Configuration');

export const configurationFactory = {
	provide: configurationType,
	useFactory: (cfgFactoryImpl: CfgFactoryImpl) => {
		return cfgFactoryImpl.getOrCreateConfiguration();
	},
	inject: [CfgFactoryImpl],
};
