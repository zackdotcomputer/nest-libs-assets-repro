import { AssetsModule } from '@app/assets';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [AssetsModule],
  controllers: [AppController],
})
export class AppModule {}
