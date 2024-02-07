import { Injectable } from '@nestjs/common';
import { CreateInnerUserDto } from './dto/create-inner-user.dto';
import { UpdateInnerUserDto } from './dto/update-inner-user.dto';

@Injectable()
export class InnerUsersService {
  create(createInnerUserDto: CreateInnerUserDto) {
    return 'This action adds a new innerUser';
  }

  findAll() {
    return `This action returns all innerUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} innerUser`;
  }

  update(id: number, updateInnerUserDto: UpdateInnerUserDto) {
    return `This action updates a #${id} innerUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} innerUser`;
  }
}
