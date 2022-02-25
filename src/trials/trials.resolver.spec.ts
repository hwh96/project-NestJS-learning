import { Test, TestingModule } from '@nestjs/testing';
import { TrialsResolver } from './trials.resolver';
import { TrialsService } from './trials.service';

describe('TrialsResolver', () => {
  let resolver: TrialsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrialsResolver, TrialsService],
    }).compile();

    resolver = module.get<TrialsResolver>(TrialsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
