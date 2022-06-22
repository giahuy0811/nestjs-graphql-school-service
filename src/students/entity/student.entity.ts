import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Class } from 'src/class/entity/class.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';



@Entity()
@ObjectType()
export class Student {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  fullname: string;

  @Field()
  @Column()
  phone: string;

  @Field()
  @ManyToOne(() => Class, (theClass) => theClass.id)
  @JoinColumn()
  class: number;

  @Field()
  @Column({ default: 'student' })
  role: string;
}