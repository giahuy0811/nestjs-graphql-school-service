import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class CreateClassInput {


  @Field({nullable: false})
  name: string

  @Field({nullable: true})
  assigned_teacher: number
  
}