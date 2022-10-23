import { Module } from '@nestjs/common';
import { KlasifikasiService } from './klasifikasi.service';
import { KlasifikasiResolver } from './klasifikasi.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Klasifikasi } from './entities/klasifikasi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Klasifikasi])],
  providers: [KlasifikasiResolver, KlasifikasiService],
  exports: [KlasifikasiService]
})
export class KlasifikasiModule {}
