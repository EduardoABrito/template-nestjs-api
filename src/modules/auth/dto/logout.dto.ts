import { ApiProperty } from '@nestjs/swagger';
import { ErrorMessages } from '../../../utils/error-messages';
import { IsString } from 'class-validator';

export class LogoutDto {
  @ApiProperty()
  @IsString({ message: ErrorMessages['string.base']('refreshToken') })
  refreshToken: string;
}
