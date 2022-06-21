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
  @Column()
  @ManyToOne(() => Class, (theClass) => theClass.id)
  @JoinColumn()
  classId: number;

  @Field()
  @Column()
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  teacherId: number;
}