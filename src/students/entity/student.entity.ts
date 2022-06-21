import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';



@Entity()
@ObjectType()
export class Student {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  fullname: string

  @Field()
  @Column()
  @JoinColumn()
  classId: number

  @Field()
  @Column({default:'student'})
  role: string
}