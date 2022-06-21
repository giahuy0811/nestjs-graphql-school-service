import { Query, Resolver } from '@nestjs/graphql';
import { Student } from './entity/student.entity';
import { StudentService } from './student.service';



@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}


  @Query(() => [Student])
  students() {
    return this.studentService.getStudents();
  }
}