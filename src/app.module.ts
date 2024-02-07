import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [UsersModule, DatabaseModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
