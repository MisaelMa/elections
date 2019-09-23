import { Test, TestingModule } from '@nestjs/testing';
import { TypelectionController } from './typelection.controller';

describe('Typelection Controller', () => {
  let controller: TypelectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypelectionController],
    }).compile();

    controller = module.get<TypelectionController>(TypelectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
