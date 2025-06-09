/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { RolUsuario } from '../common/enums/role.enum';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  @Get('admin')
  @Roles(RolUsuario.SUPERADMIN)
  getAdminOnly(@Request() req) {
    return { mensaje: 'Acceso solo para superadmin', user: req.user };
  }

  @Get('me')
  getProfile(@Request() req) {
    return { mensaje: 'Perfil del usuario', user: req.user };
  }
}