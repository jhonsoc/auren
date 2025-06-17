/* eslint-disable prettier/prettier */
// src/usuario-empresa/usuario-empresa.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEmpresa } from './entities/usuario-empresa.entity';
import { CreateUsuarioEmpresaDto } from './dto/create-usuario-empresa.dto';
import { UpdateUsuarioEmpresaDto } from './dto/update-usuario-empresa.dto';

@Injectable()
export class UsuarioEmpresaService {
  constructor(
    @InjectRepository(UsuarioEmpresa)
    private readonly repo: Repository<UsuarioEmpresa>,
  ) {}

  create(dto: CreateUsuarioEmpresaDto) {
    const nuevo = this.repo.create(dto);
    return this.repo.save(nuevo);
  }

  findAll() {
    return this.repo.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: string) {
    const usuario = await this.repo.findOne({ where: { id } });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    return usuario;
  }

  async update(id: string, dto: UpdateUsuarioEmpresaDto) {
    const usuario = await this.findOne(id);
    const actualizado = this.repo.merge(usuario, dto);
    return this.repo.save(actualizado);
  }

  async remove(id: string) {
    const usuario = await this.findOne(id);
    return this.repo.remove(usuario);
  }
}
