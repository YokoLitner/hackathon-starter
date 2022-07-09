import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('health check')
@Controller()
export class AppController {
  @ApiOperation({ summary: 'Get health of application' })
  @Get('health')
  getHealth(): string {
    return 'Server is running';
  }
}
