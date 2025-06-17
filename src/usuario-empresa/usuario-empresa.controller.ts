/* eslint-disable prettier/prettier */
// src/usuario-empresa/usuario-empresa.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UsuarioEmpresaService } from './usuario-empresa.service';
import { CreateUsuarioEmpresaDto } from './dto/create-usuario-empresa.dto';
import { UpdateUsuarioEmpresaDto } from './dto/update-usuario-empresa.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('usuario-empresa')
export class UsuarioEmpresaController {
  constructor(private readonly service: UsuarioEmpresaService) {}

  @Post()
  create(@Body() dto: CreateUsuarioEmpresaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUsuarioEmpresaDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
