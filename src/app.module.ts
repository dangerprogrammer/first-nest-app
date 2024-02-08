import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { StudentsModule } from './students/students.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { ViewModule } from './view/view.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    StudentsModule,
    ThrottlerModule.forRoot([{
      name: 'short',
      ttl: 1e3,
      limit: 3
    }, {
      name: 'long',
      ttl: 60e3,
      limit: 100
    }]),
    MyLoggerModule,
    ViewModule
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],
})

class AppModule { }

export { AppModule };