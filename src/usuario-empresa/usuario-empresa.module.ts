/* eslint-disable prettier/prettier */
// src/usuario-empresa/usuario-empresa.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEmpresaService } from './usuario-empresa.service';
import { UsuarioEmpresaController } from './usuario-empresa.controller';
import { UsuarioEmpresa } from './entities/usuario-empresa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEmpresa])],
  controllers: [UsuarioEmpresaController],
  providers: [UsuarioEmpresaService],
})
export class UsuarioEmpresaModule {}