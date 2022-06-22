import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
@ObjectType()
export class Class {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({nullable: false})
  name: string

  @Field()
  @Column({default: 0})
  student_number: number;

  @Field()
  @ManyToOne(() => User, user => user.id)
  assigned_teacher: number;
}