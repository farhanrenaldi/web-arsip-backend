import { Module } from '@nestjs/common';
import { ArsipService } from './arsip.service';
import { ArsipResolver } from './arsip.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arsip } from './entities/arsip.entity';
import { UserModule } from 'src/user/user.module';
import { KlasifikasiModule } from 'src/klasifikasi/klasifikasi.module';

@Module({
  imports: [TypeOrmModule.forFeature([Arsip]), UserModule, KlasifikasiModule],
  providers: [ArsipService, ArsipResolver]
})
export class ArsipModule {}
