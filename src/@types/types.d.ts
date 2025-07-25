import * as http from 'http';
import { AuthUserDto } from './modules/auth/dto/auth-user.dto';

// module augmentation
declare module 'express-serve-static-core' {
  export interface Request extends http.IncomingMessage, Express.Request {
    user?: AuthUserDto;
  }
}
