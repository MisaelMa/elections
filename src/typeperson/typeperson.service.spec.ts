import { Test, TestingModule } from '@nestjs/testing';
import { TypepersonService } from './typeperson.service';

describe('TypepersonService', () => {
  let service: TypepersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypepersonService],
    }).compile();

    service = module.get<TypepersonService>(TypepersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
