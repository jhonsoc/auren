/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
// src/usuario-empresa/dto/create-usuario-empresa.dto.ts
import { IsEmail, IsNotEmpty, IsIn } from 'class-validator';

export class CreateUsuarioEmpresaDto {
  @IsNotEmpty()
  documento: string;

  @IsNotEmpty()
  nombres: string;

  @IsNotEmpty()
  apellidos: string;

  @IsNotEmpty()
  telefono: string;

  @IsEmail()
  email: string;

  @IsIn(['admin', 'empleado'])
  rol: 'admin' | 'empleado';

  @IsNotEmpty()
  empresaId: string;
}
