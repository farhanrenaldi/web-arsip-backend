import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { KlasifikasiService } from './klasifikasi.service';
import { Klasifikasi } from './entities/klasifikasi.entity';

@Resolver(() => Klasifikasi)
export class KlasifikasiResolver {
  constructor(private readonly klasifikasiService: KlasifikasiService) {}

  @Mutation(() => [Klasifikasi])
  addAllKlas() {
    return this.klasifikasiService.addAll();
  }

  @Query(() => [Klasifikasi])
  findAll() {
    return this.klasifikasiService.findAll();
  }

  @Mutation(() => [Klasifikasi])
  refreshKlas(){
    this.klasifikasiService.deleteAll();
    return this.addAllKlas();
  }

}
