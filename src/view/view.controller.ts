import { Controller, Get, Render } from '@nestjs/common';

@Controller()
class ViewController {
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
}

export { ViewController };