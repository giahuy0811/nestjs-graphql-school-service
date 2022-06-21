import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class CreateStudentInput {

  @Field({nullable: false})
  fullname: string

  @Field({nullable: true})
  classId: number

} 