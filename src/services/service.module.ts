import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import {
  RepositoryModule,
  repositories,
} from '../repositories/repository.module';

import { AppService } from './app.service';

const services = [AppService];

@Module({
  imports: [ConfigModule.forRoot(), RepositoryModule, repositories],
  providers: services,
  exports: services,
})
export class ServicesModule {}
