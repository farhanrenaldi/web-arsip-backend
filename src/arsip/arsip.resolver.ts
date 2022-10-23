import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { Arsip } from './entities/arsip.entity';
import { ArsipService } from './arsip.service';
import { CreateArsipInput } from './dto/create-arsip.input';
import { User } from 'src/user/entities/user.entity';
import { UpdateArsipInput } from './dto/update-arsip.input';
import { Klasifikasi } from 'src/klasifikasi/entities/klasifikasi.entity';
import { KlasifikasiService } from 'src/klasifikasi/klasifikasi.service';

@Resolver(() => Arsip)
export class ArsipResolver {
    constructor(private arsipService: ArsipService, private klasService: KlasifikasiService) {}
    
    @Mutation(() => Arsip)
    createArsip(@Args('createArsipInput') createArsipInput: CreateArsipInput): Promise<Arsip> {
        return this.arsipService.create(createArsipInput);
    }

    @Query(() => [Arsip])
    getAllArsip(): Promise<Arsip[]> {
        return this.arsipService.findAll();           
    }
  
    @Query(() => Arsip)
    findArsip (@Args('id', { type: () => Int }) id: number): Promise<Arsip> {
        return this.arsipService.findOne(id);
    }

    @Mutation(() => Arsip)
    updateArsip (@Args(`arsip`) updateArsipInput: UpdateArsipInput) {
        return this.arsipService.update(updateArsipInput.id, updateArsipInput);
    }

    @Mutation(() => Arsip)
    removeArsip(@Args(`id`) id: number) {
        return this.arsipService.remove(id);
    }
 
    @ResolveField(() => User)
    user(@Parent() arsip: Arsip): Promise<User> {
        return this.arsipService.getUser(arsip.userId); 
    }

    @ResolveField(() => Klasifikasi)
    klasifikasi(@Parent() arsip: Arsip): Promise<Klasifikasi> {
        return this.klasService.findByKodeKlas(
            arsip.kodeDivisi,
            arsip.kodeJudul,
            arsip.kodeSubJudul
        )
    }
}
