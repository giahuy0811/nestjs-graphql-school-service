import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Class } from 'src/class/entity/class.entity';
import { User } from 'src/users/entity/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';




@Entity()
@ObjectType()
export class ClassTeacher {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @ManyToOne(() => Class, (theClass) => theClass.id)
  @JoinColumn()
  class: number;

  @Field()
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  teacher: number;
}