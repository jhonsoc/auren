/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { RolUsuario } from '../../common/enums/role.enum'; // ✅ importa desde tu ruta

export class CreateUserDto {
  @IsNotEmpty()
  documento: string;

  @IsNotEmpty()
  nombres: string;

  @IsNotEmpty()
  apellidos: string;

  @IsNotEmpty()
  telefono: string;

  @IsString()
  email: string;

  @IsEnum(RolUsuario) // ✅ aquí el cambio clave
  rol: RolUsuario;
}
