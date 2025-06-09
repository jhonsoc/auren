/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './auth/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { EmpresasModule } from './empresas/empresas.module';
import { UsuarioEmpresaModule } from './usuario-empresa/usuario-empresa.module';

@Module({
  imports: [DatabaseModule, 
    UsersModule, 
    AuthModule,
    EmpresasModule,
    UsuarioEmpresaModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
