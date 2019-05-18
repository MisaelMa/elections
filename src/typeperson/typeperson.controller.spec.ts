import { Test, TestingModule } from '@nestjs/testing';
import { TypepersonController } from './typeperson.controller';

describe('Typeperson Controller', () => {
  let controller: TypepersonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypepersonController],
    }).compile();

    controller = module.get<TypepersonController>(TypepersonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
