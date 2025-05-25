import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDTO } from './create-user.dto';
import { UpdateUserDTO } from './update-user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.userRepository.find();
  }


  async createUser(createUserDTO: CreateUserDTO) {
    try {
      return await this.userRepository.save(createUserDTO);
    } catch (error) {
      throw new ConflictException('User with this email already exists');
    }
  }


 async getUser(userId: number): Promise<User> {
  const userdata = await this.userRepository.findOneBy({ userId });
  
  if (!userdata) {
    throw new NotFoundException(`User with ID ${userId} not found`);
  }
  
  return userdata;
}


  updateUser(updateUserDTO: UpdateUserDTO, userId: number) {
    return this.userRepository.update(userId, updateUserDTO)
  }

  deleteUser(param: { userId: number }) {
    return this.userRepository.delete(param)
  }
}
