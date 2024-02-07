import { Test, TestingModule } from '@nestjs/testing';
import { InnerUsersController } from './inner-users.controller';
import { InnerUsersService } from './inner-users.service';

describe('InnerUsersController', () => {
  let controller: InnerUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InnerUsersController],
      providers: [InnerUsersService],
    }).compile();

    controller = module.get<InnerUsersController>(InnerUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
