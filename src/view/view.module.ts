import { Module } from '@nestjs/common';
import { ViewController } from './view.controller';
import { StudentsService } from 'src/students/students.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ViewController],
  providers: [StudentsService]
})
export class ViewModule {}
