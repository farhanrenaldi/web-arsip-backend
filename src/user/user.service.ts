import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async create(createUserInput: CreateUserInput) {
    const newUser = this.userRepository.create(createUserInput);
    return  this.userRepository.save(newUser);
  }

  async findAll() {
    return this.userRepository.find({
      relations: ["arsip"]
    });
  }

  async findOne(id: string): Promise<User | undefined> {
    return this.userRepository.findOne(id, {
      relations: ["arsip"]
    });
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    let user: User = this.userRepository.create(updateUserInput);
    user.id = id;
    return this.userRepository.save(user);
  }

  async remove(id: string) {
    let user = this.findOne(id);
    if (user) {
      let ret = await this.userRepository.delete(id)
      if (ret.affected === 1) {
        return user;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`)
  }
}
