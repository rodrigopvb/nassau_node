import { SequelizeModuleOptions } from '@nestjs/sequelize';

import * as config from './config.json';
import entities from '../models';

let environment = config.development;
// eslint-disable-next-line @typescript-eslint/ban-types
const logging: boolean | Function = false;

let max = 5;

if (process.env.NODE_ENV === 'development') {
  environment = config.development;
  max = 50;
}

export default {
  host: environment.host,
  username: environment.username,
  password: environment.password,
  database: environment.database,
  dialect: environment.dialect,
  models: [...entities],
  port: config.port,
  logging,
  pool: { max, acquire: 300000 },
} as SequelizeModuleOptions;
