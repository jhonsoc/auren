/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEmpresa } from './usuario-empresa.entity';

@Injectable()
export class UsuarioEmpresaService {
  constructor(
    @InjectRepository(UsuarioEmpresa)
    private readonly repo: Repository<UsuarioEmpresa>,
  ) {}

  async vincular(usuarioId: string, empresaId: string): Promise<UsuarioEmpresa> {
    return this.repo.save({
      usuario: { id: usuarioId } as any,
      empresa: { id: empresaId } as any,
    });
  }

  async obtenerEmpresasDelUsuario(usuarioId: string): Promise<UsuarioEmpresa[]> {
    return this.repo.find({
      where: { usuario: { id: usuarioId } },
    });
  }
}
