import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class StudentsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createStudentDto: Prisma.StudentsCreateInput) {
    return this.databaseService.students.create({
      data: createStudentDto
    });
  }

  async findAll() {
    return this.databaseService.students.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.students.findUnique({
      where: { id }
    });
  }

  async update(id: number, updateStudentDto: Prisma.StudentsUpdateInput) {
    return this.databaseService.students.update({
      where: { id },
      data: updateStudentDto
    });
  }

  async remove(id: number) {
    return this.databaseService.students.delete({
      where: { id }
    });
  }
}
