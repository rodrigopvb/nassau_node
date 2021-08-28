import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './services/app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
