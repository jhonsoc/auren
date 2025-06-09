/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';
import { UsuarioEmpresa } from '../usuario-empresa/usuario-empresa.entity';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresasRepo: Repository<Empresa>,
     @InjectRepository(UsuarioEmpresa)
     private readonly usuarioEmpresaRepo: Repository<UsuarioEmpresa>,
  ) {}

  async crearEmpresa(data: Partial<Empresa>): Promise<Empresa> {
    const nueva = this.empresasRepo.create(data);
    return this.empresasRepo.save(nueva);
  }

  async listarEmpresas(): Promise<Empresa[]> {
    return this.empresasRepo.find();
  }

  async buscarPorNit(nit: string): Promise<Empresa | null> {
    return this.empresasRepo.findOne({ where: { nit } });
  }

  async obtenerEmpresasPorUsuario(usuarioId: string, esSuperadmin: boolean): Promise<Empresa[]> {
  if (esSuperadmin) {
    return this.empresasRepo.find();
  }

  const relaciones = await this.usuarioEmpresaRepo.find({
    where: { usuario: { id: usuarioId } },
    relations: ['empresa'],
  });

  return relaciones.map(rel => rel.empresa);
 }
}
