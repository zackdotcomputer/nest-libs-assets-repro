import { AssetsService } from '@app/assets';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  getHello(): string {
    return this.assetsService.getHello();
  }
}
