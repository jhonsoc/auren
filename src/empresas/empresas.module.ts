/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from './empresa.entity';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { UsuarioEmpresa } from '../usuario-empresa/usuario-empresa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa,UsuarioEmpresa])],
  providers: [EmpresasService],
  controllers: [EmpresasController],
  exports: [EmpresasService],
})
export class EmpresasModule {}
