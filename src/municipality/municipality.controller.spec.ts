import { Test, TestingModule } from '@nestjs/testing';
import { MunicipalityController } from './municipality.controller';

describe('Municipality Controller', () => {
  let controller: MunicipalityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MunicipalityController],
    }).compile();

    controller = module.get<MunicipalityController>(MunicipalityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
