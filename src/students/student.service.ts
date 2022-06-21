import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student.input';
import { Student } from './entity/student.entity';


@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private readonly studentRepository : Repository<Student>){}


  async getStudent(id : number){
    const student = await this.studentRepository.findOne({
      where : {id}
    })

    return student

  }


  async getStudents(){

    const students = await this.studentRepository.find()

    return students

  }

  async createStudent(createStudentInput: CreateStudentInput){

    const student = await this.studentRepository.create(createStudentInput)

    return student

  }


  async deleteStudent(id: number){

    await this.studentRepository.delete(id)

    return {
      success: true
    }
  }

}