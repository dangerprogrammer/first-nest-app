import { Controller, Get, Param, Render } from '@nestjs/common';
import { StudentsService } from 'src/students/students.service';

@Controller()
class ViewController {
    constructor(private readonly studentsService: StudentsService) { }

    @Get()
    @Render('index')
    home() {
        return {};
    }

    @Get('students')
    @Render('students')
    students() {
        return {};
    }

    @Get('students/:id')
    @Render('student')
    async student(@Param('id') id: string) {
        const user = await this.studentsService.findOne(+id);

        return { user };
    }
}

export { ViewController };