import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassTeacher } from './entity/class-teacher.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ClassTeacher])],
})
export class ClassTeacherModule {}