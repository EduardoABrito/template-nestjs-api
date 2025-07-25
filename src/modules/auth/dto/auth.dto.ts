import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

import { ErrorMessages } from '../../../utils/error-messages';

export class LoginDto {
  @ApiProperty()
  @IsString({ message: ErrorMessages['string.base']('Usuário') })
  username: string;

  @ApiProperty()
  @IsString({ message: ErrorMessages['string.base']('Senha') })
  password: string;
}

export class LoginResponseDto {
  user: {
    id: string;
    name: string;
    username: string;
    profile?: string;
    picture?: string;
    department?: string;
  };
  token: string;
  refreshToken: string;
  expiresIn: number;
  roles: string[];
}
