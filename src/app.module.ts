import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './services/app.service';
import { ConfigModule } from '@nestjs/config';
import {
  RepositoryModule,
  repositories,
} from './repositories/repository.module';
@Module({
  imports: [ConfigModule.forRoot(), RepositoryModule, repositories],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
