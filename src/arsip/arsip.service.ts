import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Arsip } from './entities/arsip.entity';
import { CreateArsipInput } from './dto/create-arsip.input';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { UpdateArsipInput } from './dto/update-arsip.input';

@Injectable()
export class ArsipService {
    constructor(@InjectRepository(Arsip)
        private arsipRepository: Repository<Arsip>,
        private userService: UserService
        ) {}

    async create(createArsipInput: CreateArsipInput): Promise<Arsip> {
        const newArsip = this.arsipRepository.create(createArsipInput);

        return this.arsipRepository.save(newArsip); 
    }

    async findAll(): Promise<Arsip[]> {
        return this.arsipRepository.find(); //SELECT * FROM arsip
    }

    async findOne(id: number): Promise<Arsip> {
        return this.arsipRepository.findOneOrFail(id);
    }

    async update(id: number, updateArsipInput: UpdateArsipInput) {
        let arsip: Arsip = this.arsipRepository.create(updateArsipInput);
        arsip.id = id;
        return this.arsipRepository.save(arsip);
    }

    async remove(id: number) {
        let arsip = this.findOne(id);
        if (arsip) {
            let ret = await this.arsipRepository.delete(id);
            if (ret.affected === 1) {
                return arsip
            }
        }
        throw new NotFoundException(`Record cannot find by id ${id}`)
    }

    async getUser(userId: string): Promise<User> {
        return this.userService.findOne(userId)
    }
}
