import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './dto/create-student.input';
import { Student } from './entity/student.entity';
import { StudentService } from './student.service';



@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}


  @Query(() => [Student])
  students() {
    return this.studentService.getStudents();
  }


  @Mutation(() => Student)
  createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput){
    return this.studentService.createStudent(createStudentInput)
  }

}