import { Test, TestingModule } from '@nestjs/testing';
import { KlasifikasiService } from './klasifikasi.service';

describe('KlasifikasiService', () => {
  let service: KlasifikasiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KlasifikasiService],
    }).compile();

    service = module.get<KlasifikasiService>(KlasifikasiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
