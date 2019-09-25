import { Test, TestingModule } from '@nestjs/testing';
import { FiscalInformationService } from './fiscal-information.service';

describe('FiscalInformationService', () => {
  let service: FiscalInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiscalInformationService],
    }).compile();

    service = module.get<FiscalInformationService>(FiscalInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
