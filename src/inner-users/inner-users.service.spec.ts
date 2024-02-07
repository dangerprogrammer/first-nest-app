import { Test, TestingModule } from '@nestjs/testing';
import { InnerUsersService } from './inner-users.service';

describe('InnerUsersService', () => {
  let service: InnerUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InnerUsersService],
    }).compile();

    service = module.get<InnerUsersService>(InnerUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
