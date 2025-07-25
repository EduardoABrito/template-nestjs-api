import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import { createLogger, format, transports } from 'winston';

import { AppModule } from './app.module';
import { TypedConfig } from './config/app.config';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(
      createLogger({
        level: process.env.LOG_LEVEL || 'debug',
        format: format.json(),
        transports: [new transports.Console()],
      }),
    ),
  });

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());

  const typedConfig = app.get<TypedConfig>(TypedConfig);
  const port = typedConfig.port;

  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle(process.env.npm_package_name!)
      .setDescription(process.env.npm_package_description!)
      .setVersion(process.env.npm_package_version!)
      .setContact(
        process.env.npm_package_description!,
        process.env.npm_package_homepage!,
        process.env.npm_package_author!,
      )
      .addBearerAuth()
      .build(),
  );
  SwaggerModule.setup('/', app, document);

  await app.listen(port, () => {
    Logger.log(`Application started on port: ${port}`, 'Bootstrap');
  });
}

bootstrap();
