import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('users')
@UseGuards(BeltGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(/*@Query('type') type: string*/) {
        return this.usersService.getUsers();
    }

    @Post()
    @UseGuards(BeltGuard)
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