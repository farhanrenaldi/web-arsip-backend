import { Test, TestingModule } from '@nestjs/testing';
import { ArsipResolver } from './arsip.resolver';

describe('ArsipResolver', () => {
  let resolver: ArsipResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArsipResolver],
    }).compile();

    resolver = module.get<ArsipResolver>(ArsipResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
