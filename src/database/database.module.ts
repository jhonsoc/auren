/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const logger = new Logger('DatabaseModule');
        const url = process.env.DATABASE_URL;
        logger.debug('📦 DATABASE_URL cargada desde .env');
        return {
          type: 'postgres',
          url,
          autoLoadEntities: true,
          synchronize: true, // ⚠️ Solo en desarrollo
        };
      },
    }),
  ],
})
export class DatabaseModule {}
