import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-class.input';
import { User } from './entity/user.entity';
import { UserService } from './user.service';



@Resolver(() => User)
export class UserResolver{

  constructor(private readonly userService: UserService){}

  @Query(() => [User])
  users(){
    return this.userService.getUsers()
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput){
    return this.userService.createUser(createUserInput)
  } 
}