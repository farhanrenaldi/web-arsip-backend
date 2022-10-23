import { Test, TestingModule } from '@nestjs/testing';
import { KlasifikasiResolver } from './klasifikasi.resolver';
import { KlasifikasiService } from './klasifikasi.service';

describe('KlasifikasiResolver', () => {
  let resolver: KlasifikasiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KlasifikasiResolver, KlasifikasiService],
    }).compile();

    resolver = module.get<KlasifikasiResolver>(KlasifikasiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
