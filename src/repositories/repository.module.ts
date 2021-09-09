import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import * as config from '../database/config.json';

import User from './entities/user';

const entities = [User];

export const repositories = SequelizeModule.forFeature(entities);

let max = 5;

let environment = config.development;
if (process.env.NODE_ENV === 'development') {
  environment = config.development;
  max = 50;
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      host: environment.host,
      dialect: 'mysql',
      username: environment.username,
      password: environment.password,
      database: environment.database,
      pool: { max, acquire: 300000 },
      models: [...entities],
      port: 3306,
    }),
  ],
})
export class RepositoryModule {}
