import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKlasifikasiInput } from './dto/create-klasifikasi.input';
import { Klasifikasi } from './entities/klasifikasi.entity';
import * as humas from './json/humas.new.json'
import * as tu from './json/tata_usaha.new.json'

@Injectable()
export class KlasifikasiService {
  constructor(@InjectRepository(Klasifikasi) private klasRepo: Repository<Klasifikasi>) {}

  async addAll() {

    for(let i in humas.klasifikasi) {
      let newKlas = new CreateKlasifikasiInput()

      newKlas.kodeDivisi = 'HU';
      newKlas.judul = humas.klasifikasi[i].judul;
      newKlas.kodeJudul = humas.klasifikasi[i].kodeJudul;
      newKlas.subJudul = humas.klasifikasi[i].subJudul;
      newKlas.kodeSubJudul = humas.klasifikasi[i].kodeSubJudul;
      newKlas.jangkaSimpananAktif = humas.klasifikasi[i].jangkaSimpanAktif;
      newKlas.jangkaSimpananInaktif = humas.klasifikasi[i].jangkaSimpanInaktif;

      let createKlas = this.klasRepo.create(newKlas);
      await this.klasRepo.insert(createKlas)
    }

    for(let i in tu.klasifikasi) {
      let newKlas = new CreateKlasifikasiInput()

      newKlas.kodeDivisi = 'TU';
      newKlas.judul = humas.klasifikasi[i].judul;
      newKlas.kodeJudul = humas.klasifikasi[i].kodeJudul;
      newKlas.subJudul = humas.klasifikasi[i].subJudul;
      newKlas.kodeSubJudul = humas.klasifikasi[i].kodeSubJudul;
      newKlas.jangkaSimpananAktif = humas.klasifikasi[i].jangkaSimpanAktif;
      newKlas.jangkaSimpananInaktif = humas.klasifikasi[i].jangkaSimpanInaktif;

      let createKlas = this.klasRepo.create(newKlas);
      await this.klasRepo.insert(createKlas)
    }

    return this.klasRepo.find();
  }

  findAll() {
    return this.klasRepo.find();
  }

  async deleteAll() {
    return this.klasRepo.clear();
  }

  findByKodeKlas(
    kodeDivisi: string,
    kodeJudul: string,
    kodeSubJudul?: string
  ) {
    return this.klasRepo.findOne({
      kodeDivisi, kodeJudul, kodeSubJudul
    })
  }

}
