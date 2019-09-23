import { Test, TestingModule } from '@nestjs/testing';
import { ElectionResolver } from './election.resolver';

describe('ElectionResolver', () => {
  let resolver: ElectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElectionResolver],
    }).compile();

    resolver = module.get<ElectionResolver>(ElectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
