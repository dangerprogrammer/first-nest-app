import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(/*@Query('type') type: string*/) {
        return this.usersService.getUsers();
    }

    @Post()
    createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(+id, updateUserDto);
    }

    @Delete(':id')
    removeUser(@Param('id') id: string) {
        return this.usersService.removeUser(+id);
    }

    @Get(':id')
    getOneUser(@Param('id') id: string) {
        return this.usersService.getUser(+id);
    }
}