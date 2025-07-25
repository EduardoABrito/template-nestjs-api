import { Global, Logger, Module } from '@nestjs/common';
import { validateOrReject } from 'class-validator';

import { TypedConfig, getConfig } from './app.config';

@Global()
@Module({
  providers: [
    {
      provide: TypedConfig,
      useFactory: async () => {
        try {
          const config = getConfig();
          await validateOrReject(config, {
            validationError: {
              target: false,
              value: false,
            },
          });
          return config;
        } catch (error) {
          Logger.error(error);
          process.exit(1);
        }
      },
    },
  ],
  exports: [TypedConfig],
})
export class ConfigModule {}
