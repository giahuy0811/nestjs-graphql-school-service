import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
@ObjectType()
export class Class {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({default: 0})
  student_number: number;

  @Field()
  @Column()
  assigned_teacher: number;
}