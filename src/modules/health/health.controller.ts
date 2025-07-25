import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private health: HealthCheckService) {}

  @Get()
  @ApiOperation({
    summary: 'Endpoint para checar se a API está rodando.',
  })
  @HealthCheck()
  async check() {
    return this.health.check([]);
  }
}
