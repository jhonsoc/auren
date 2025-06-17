/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RolUsuario } from '../common/enums/role.enum';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    this.logger.debug(`📥 Intentando login con: ${JSON.stringify(loginDto)}`);

    const user = await this.usersService.findByDocumento(loginDto.documento);
    this.logger.debug(`🧾 Usuario encontrado: ${JSON.stringify(user)}`);

    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      this.logger.warn('❌ Credenciales inválidas');
      throw new UnauthorizedException('Credenciales inválidas');
    }

    this.logger.log(`✅ Login exitoso para ${user.documento}`);

    const payload = {
      sub: user.id,
      documento: user.documento,
      nombre: user.nombre, 
      rol: user.rol,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto) {
  const hashedPassword = await bcrypt.hash(registerDto.password, 10);
  const user = await this.usersService.create({
    ...registerDto,
    password: hashedPassword,
    rol: RolUsuario.SUPERADMIN, // ← asigna rol inicial aquí
  });
  return {
    id: user.id,
    documento: user.documento,
    nombre: user.nombre,
    rol: user.rol,
  };
}
}
