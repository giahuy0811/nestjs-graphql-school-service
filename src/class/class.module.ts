import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassTeacher } from 'src/class-teacher/entity/class-teacher.entity';
import { ClassResolver } from './class.resolver';
import { ClassService } from './class.service';
import { Class } from './entity/class.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Class,ClassTeacher])],
  providers: [ClassService,ClassResolver],
  exports: [ClassService,ClassResolver]
})
export class ClassModule{}