/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { RolUsuario } from '../common/enums/role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  documento: string;

  @Column()
  nombre: string;

  @Column()
  password: string;

   @Column({
    type: 'enum',
    enum: RolUsuario,
    default: RolUsuario.COLABORADOR,
  })
  rol: RolUsuario;
}
