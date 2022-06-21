import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClassService } from './class.service';
import { CreateClassInput } from './dto/create-class.input';
import { Class } from './entity/class.entity';

@Resolver(() => Class)
export class ClassResolver {
  constructor(private readonly classService: ClassService){}


  @Query(() => [Class])
  classes(){
    return this.classService.getAllClasses()
  }

  @Mutation(() => Class)
  createClass(@Args('createClassInput') createClassInput: CreateClassInput){
    return this.classService.createClass(createClassInput)
  }
}