import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
CreateUserDto

@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query('type') type: string) {
        return [
            { type }
        ];
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return {
            name: createUserDto.name
        };
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return {
            id,
            name: updateUserDto
        }
    }

    @Delete(':id')
    removeUser(@Param('id') id: string) {
        return {
            id
        };
    }

    @Get(':id')
    getOneUser(@Param('id') id: string) {
        return {
            id
        };
    }
}