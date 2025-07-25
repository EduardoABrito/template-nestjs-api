import { ApiProperty } from '@nestjs/swagger';

export class AuthUserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email_verified: boolean;

  @ApiProperty()
  profile: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  preferred_username: string;

  @ApiProperty()
  given_name: string;

  @ApiProperty()
  family_name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  picture: string;

  @ApiProperty()
  roles: string[];
}
