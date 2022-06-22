import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassInput } from './dto/create-class.input';
import { Class } from './entity/class.entity';


@Injectable()
export class ClassService {
  constructor(@InjectRepository(Class) private readonly classRepository: Repository<Class>){}


  async getAllClasses(){

    const classes = await this.classRepository.find()
    
    return classes

  }

  async createClass(createClassInput: CreateClassInput){

    const c = new Class()
    c.assigned_teacher = createClassInput.assigned_teacher
    c.name = createClassInput.name

    await this.classRepository.save(c)

    return c;
  }

}