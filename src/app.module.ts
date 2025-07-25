import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule as ConfigModuleNest } from '@nestjs/config';

import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModuleNest.forRoot({
      isGlobal: true,
    }),
    ConfigModule,
    DatabaseModule,
    HealthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, AuthMiddleware)
      .exclude('v1/auth/login', 'health')
      .forRoutes('*');
  }
}
