import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class CreateUserInput {

  @Field({nullable: false})
  email: string

  @Field({nullable: false})
  phone: string

  @Field({nullable: false})
  role: string

}