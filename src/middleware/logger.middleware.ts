import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(req: Request, _: Response, next: NextFunction) {
    const { method, baseUrl, query, body } = req;
    Logger.debug({ method, baseUrl, query, body });

    next();
  }
}
