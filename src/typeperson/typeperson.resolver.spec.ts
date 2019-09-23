import { Test, TestingModule } from '@nestjs/testing';
import { TypepersonResolver } from './typeperson.resolver';

describe('TypepersonResolver', () => {
  let resolver: TypepersonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypepersonResolver],
    }).compile();

    resolver = module.get<TypepersonResolver>(TypepersonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
