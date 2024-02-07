import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InnerUsersService } from './inner-users.service';
import { CreateInnerUserDto } from './dto/create-inner-user.dto';
import { UpdateInnerUserDto } from './dto/update-inner-user.dto';

@Controller('inner-users')
export class InnerUsersController {
  constructor(private readonly innerUsersService: InnerUsersService) {}

  @Post()
  create(@Body() createInnerUserDto: CreateInnerUserDto) {
    return this.innerUsersService.create(createInnerUserDto);
  }

  @Get()
  findAll() {
    return this.innerUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.innerUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInnerUserDto: UpdateInnerUserDto) {
    return this.innerUsersService.update(+id, updateInnerUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.innerUsersService.remove(+id);
  }
}
