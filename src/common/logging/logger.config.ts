/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import 'winston-loggly-bulk';

const { Loggly } = require('winston-loggly-bulk');


export const loggerConfig: WinstonModuleOptions = {
    level: 'debug',
  levels: winston.config.npm.levels,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        nestWinstonModuleUtilities.format.nestLike('Auren', { prettyPrint: true }),
      ),
    }),

    new winston.transports.DailyRotateFile({
      filename: 'logs/auren-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'debug',
      zippedArchive: true,
      maxSize: '10m',
      maxFiles: '14d',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),

    new winston.transports.DailyRotateFile({
      filename: 'logs/auren-error-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'error',
      zippedArchive: true,
      maxSize: '5m',
      maxFiles: '30d',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),

    new Loggly({
      token: '6f7f1eb2-5e96-4a18-b7d5-7048fe47925a',
      subdomain: 'aurenplus',
      tags: ['Auren', 'NestJS'],
      json: true,
    }),
  ],
};
