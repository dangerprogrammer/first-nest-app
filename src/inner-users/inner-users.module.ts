import { Module } from '@nestjs/common';
import { InnerUsersService } from './inner-users.service';
import { InnerUsersController } from './inner-users.controller';

@Module({
  controllers: [InnerUsersController],
  providers: [InnerUsersService],
})
export class InnerUsersModule {}
