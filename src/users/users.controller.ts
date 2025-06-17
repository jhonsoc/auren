/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards, Request, Body, Delete, Param, Post, Put } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @UseGuards(JwtAuthGuard)
    @Get('me')
    getProfile(@Request() req: { user: JwtPayload }) {
        return {
            mensaje: 'Ruta protegida',
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            usuario: req.user,
        };
    }
    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.usersService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
        return this.usersService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }

}
