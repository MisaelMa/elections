import { Test, TestingModule } from '@nestjs/testing';
import { AccesstokensService } from './accesstokens.service';

describe('AccesstokensService', () => {
  let service: AccesstokensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccesstokensService],
    }).compile();

    service = module.get<AccesstokensService>(AccesstokensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
