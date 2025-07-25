import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  public catch(error: Error, host: ArgumentsHost): void {
    const request: Request = host.switchToHttp().getRequest();
    const response: Response = host.switchToHttp().getResponse<Response>();

    const errorResponse = this.handleNestError(error);

    Logger.error(
      {
        message: error.message,
        code: errorResponse.statusCode,
        content: {
          method: request.method,
          hostname: request.hostname,
          originalUrl: request.originalUrl,
          route: request.baseUrl,
          query: request.query,
          params: request.params,
          body: request.body,
        },
      },
      error?.stack,
    );

    response.status(errorResponse.statusCode).json(errorResponse);
  }

  private handleNestError(error: Error): {
    statusCode: number;
    message?: string;
    name?: string;
    [key: string]: any;
  } {
    const defaultErrorStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    const defaultErrorMessage = 'Ocorreu um erro interno no servidor.';
    const defaultErrorName = 'Internal Server Error';
    let newErrorResponse: {
      statusCode: number;
      message?: string;
      name?: string;
      [key: string]: any;
    } = {
      statusCode: defaultErrorStatus,
      message: defaultErrorMessage,
      name: defaultErrorName,
    };

    if (error instanceof HttpException) {
      newErrorResponse.statusCode = error.getStatus();
      newErrorResponse.message = error.message;
      newErrorResponse.name = error.name;
      const errorResponse = error.getResponse();
      const isErrorResponseObject =
        typeof errorResponse === 'object' &&
        !Array.isArray(errorResponse) &&
        errorResponse !== null;
      if (isErrorResponseObject) {
        newErrorResponse = { ...newErrorResponse, ...errorResponse };
      }
    }

    return newErrorResponse;
  }
}
