/* eslint-disable prettier/prettier */
// src/usuario-empresa/entities/usuario-empresa.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Empresa } from '../../empresas/empresa.entity';

@Entity('usuario_empresa')
export class UsuarioEmpresa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  documento: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  telefono: string;

  @Column()
  email: string;

  @Column()
  rol: 'admin' | 'empleado';

  @ManyToOne(() => Empresa, (empresa) => empresa.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'empresaId' })
  empresa: Empresa;

  @Column()
  empresaId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
