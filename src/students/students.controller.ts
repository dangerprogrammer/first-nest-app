import { Controller, Get, Post, Body, Patch, Param, Delete, Ip } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Prisma } from '@prisma/client';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { MyLoggerService } from 'src/my-logger/my-logger.service';

@SkipThrottle()
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  private readonly logger = new MyLoggerService(StudentsController.name);

  @Post()
  create(@Body() createStudentDto: Prisma.StudentsCreateInput) {
    return this.studentsService.create(createStudentDto);
  }

  @SkipThrottle({ default: !1 })
  @Get()
  findAll(@Ip() ip: string) {
    this.logger.log(`Request for all Students\t${ip}`);
    return this.studentsService.findAll();
  }

  @Throttle({ short: { ttl: 1e3, limit: 1 } })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: Prisma.StudentsUpdateInput) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
