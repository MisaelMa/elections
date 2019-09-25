import { Test, TestingModule } from '@nestjs/testing';
import { FiscalInformationController } from './fiscal-information.controller';

describe('FiscalInformation Controller', () => {
  let controller: FiscalInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiscalInformationController],
    }).compile();

    controller = module.get<FiscalInformationController>(FiscalInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
