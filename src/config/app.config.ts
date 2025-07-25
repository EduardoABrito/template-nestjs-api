import { Injectable } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class DatabaseConfig {
  @IsString({ message: 'DATABASE_URL must be a valid string' })
  @IsNotEmpty({ message: 'DATABASE_URL is required and cannot be empty' })
  url: string;
}

@Injectable()
export class TypedConfig {
  @IsString({ message: 'ENV must be a valid string (e.g: dev, prod, test)' })
  @IsNotEmpty({ message: 'ENV is required and cannot be empty' })
  env: string;

  @IsNumber({}, { message: 'PORT must be a valid number' })
  @IsNotEmpty({ message: 'PORT is required and cannot be empty' })
  port: number;

  @IsNotEmpty({ message: 'APP_NAME is required and cannot be empty' })
  @IsString({ message: 'APP_NAME must be a valid string' })
  appName: string;

  @IsString({
    message: 'LOG_LEVEL must be a valid string (e.g: error, warn, info, debug)',
  })
  @IsNotEmpty({ message: 'LOG_LEVEL is required and cannot be empty' })
  logLevel: string;

  @ValidateNested({ message: 'Database configuration is invalid' })
  @Type(() => DatabaseConfig)
  database: DatabaseConfig;
}

export function getConfig(): TypedConfig {
  const config = new TypedConfig();

  config.appName = process.env.APP_NAME ?? 'NestJS API';
  config.env = process.env.ENV ?? 'dev';
  config.port = process.env.PORT ? Number(process.env.PORT) : 3000;
  config.logLevel = process.env.LOG_LEVEL ?? 'debug';

  config.database = new DatabaseConfig();
  config.database.url = process.env.DATABASE_URL!;

  return config;
}
