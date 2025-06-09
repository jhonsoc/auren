/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { UsuarioEmpresaService } from './usuario-empresa.service';
import { JwtAuthGuard } from '../auth/auth.guard';

@Controller('usuario-empresa')
@UseGuards(JwtAuthGuard)
export class UsuarioEmpresaController {
  constructor(private readonly service: UsuarioEmpresaService) {}

  @Post()
  async vincular(@Body() body: { usuarioId: string; empresaId: string }) {
    return this.service.vincular(body.usuarioId, body.empresaId);
  }

  @Get('mis-empresas')
  async obtener(@Request() req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.service.obtenerEmpresasDelUsuario(req.user.sub);
  }
}
