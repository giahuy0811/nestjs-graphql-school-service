import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}


  async getUsers(){
    const users = await this.userRepository.find()
    
    return users
  }

  async createUser(createUserInput: CreateUserInput){

    const newUser = new User()

    newUser.email = createUserInput.email
    newUser.phone = createUserInput.phone
    newUser.role = createUserInput.role
    
    await this.userRepository.save(newUser)

    return newUser;
  }
}