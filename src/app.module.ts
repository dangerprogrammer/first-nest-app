import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { InnerUsersModule } from './inner-users/inner-users.module';

@Module({
  imports: [UsersModule, InnerUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
