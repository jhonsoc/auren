/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// src/usuario-empresa/dto/update-usuario-empresa.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioEmpresaDto } from './create-usuario-empresa.dto';

export class UpdateUsuarioEmpresaDto extends PartialType(CreateUsuarioEmpresaDto) {}
