/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Request } from 'express';

@Controller('test')
export class TestController {
  @Get()
  @UseGuards(JwtAuthGuard)
  test(@Req() req: Request & { user?: unknown }) {
    console.log('✅ TestController - Usuario:', req.user);
    return {
      message: 'Ruta protegida accedida correctamente',
      user: req.user,
    };
  }
}
