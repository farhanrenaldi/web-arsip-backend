import { Test, TestingModule } from '@nestjs/testing';
import { ArsipService } from './arsip.service';

describe('ArsipService', () => {
  let service: ArsipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArsipService],
    }).compile();

    service = module.get<ArsipService>(ArsipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
