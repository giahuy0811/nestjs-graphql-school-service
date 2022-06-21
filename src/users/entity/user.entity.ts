import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String)
  @Column({nullable: false})
  email: string

  @Field(() => String)
  @Column({nullable: false})
  phone: string

  @Field(() => String)
  @Column({nullable: false})
  role: string
}