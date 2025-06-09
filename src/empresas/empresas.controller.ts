/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { Empresa } from './empresa.entity';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { RolUsuario } from '../common/enums/role.enum';

@Controller('empresas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Post()
  @Roles(RolUsuario.SUPERADMIN)
  crear(@Body() data: Partial<Empresa>): Promise<Empresa> {
    return this.empresasService.crearEmpresa(data);
  }

  @Get()
  @Roles(RolUsuario.SUPERADMIN)
  listar(): Promise<Empresa[]> {
    return this.empresasService.listarEmpresas();
  }
}
