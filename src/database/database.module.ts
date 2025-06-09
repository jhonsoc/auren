/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const url = process.env.DATABASE_URL;
        console.log('📦 DATABASE_URL cargada desde .env:', url);
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
