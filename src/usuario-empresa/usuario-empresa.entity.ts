/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Empresa } from '../empresas/empresa.entity';

@Entity()
export class UsuarioEmpresa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'usuario_id' })
  usuario: User;

  @ManyToOne(() => Empresa, { eager: true })
  @JoinColumn({ name: 'empresa_id' })
  empresa: Empresa;
}
