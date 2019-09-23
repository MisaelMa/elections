import { Test, TestingModule } from '@nestjs/testing';
import { AccesstokensController } from './accesstokens.controller';

describe('Accesstokens Controller', () => {
  let controller: AccesstokensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccesstokensController],
    }).compile();

    controller = module.get<AccesstokensController>(AccesstokensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
