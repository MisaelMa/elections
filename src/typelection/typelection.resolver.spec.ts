import { Test, TestingModule } from '@nestjs/testing';
import { TypelectionResolver } from './typelection.resolver';

describe('TypelectionResolver', () => {
  let resolver: TypelectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypelectionResolver],
    }).compile();

    resolver = module.get<TypelectionResolver>(TypelectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
