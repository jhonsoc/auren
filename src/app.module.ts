/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TestController } from './test/test.controller';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EmpresasModule } from './empresas/empresas.module';
import { UsuarioEmpresaModule } from './usuario-empresa/usuario-empresa.module';


@Module({
  controllers: [TestController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    EmpresasModule,
    UsuarioEmpresaModule,
  ],
  /*providers: [
   {
      provide: APP_GUARD,
      useClass: JwtAuthGuard, // 🛡️ Se ejecuta primero
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard, // 🧠 Evalúa roles luego de inyectar el user
    },
  ],*/
})
export class AppModule {}
