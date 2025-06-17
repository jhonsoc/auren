/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { RolUsuario } from '../common/enums/role.enum';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  private readonly logger = new Logger(RolesGuard.name);

 canActivate(context: ExecutionContext): boolean {
  const requiredRoles = this.reflector.getAllAndOverride<RolUsuario[]>(ROLES_KEY, [
    context.getHandler(),
    context.getClass(),
  ]);

  if (!requiredRoles || requiredRoles.length === 0) {
    return true;
  }

  const request = context.switchToHttp().getRequest();
  const user: JwtPayload = request.user;

  // Logs de depuración
  this.logger.debug(`👉 Request headers: ${JSON.stringify(request.headers)}`);
  this.logger.debug(`👉 Usuario extraído en RolesGuard: ${JSON.stringify(user)}`);
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  this.logger.debug(`👉 Roles requeridos: ${requiredRoles}`);

  const userRol = user?.rol?.toString().toUpperCase();
  const match = requiredRoles.map(r => r.toString().toUpperCase()).includes(userRol);

  this.logger.debug(`👉 Coincidencia de rol: ${match}`);

  if (!userRol || !match) {
    throw new ForbiddenException('No tienes permisos para acceder a esta ruta.');
  }

  return true;
}
}