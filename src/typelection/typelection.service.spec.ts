import { Test, TestingModule } from '@nestjs/testing';
import { TypelectionService } from './typelection.service';

describe('TypelectionService', () => {
  let service: TypelectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypelectionService],
    }).compile();

    service = module.get<TypelectionService>(TypelectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
