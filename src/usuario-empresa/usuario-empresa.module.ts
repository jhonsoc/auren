/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEmpresa } from './usuario-empresa.entity';
import { UsuarioEmpresaService } from './usuario-empresa.service';
import { UsuarioEmpresaController } from './usuario-empresa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEmpresa])],
  providers: [UsuarioEmpresaService],
  controllers: [UsuarioEmpresaController],
  exports: [UsuarioEmpresaService],
})
export class UsuarioEmpresaModule {}