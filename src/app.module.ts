import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { StudentModule } from './students/student.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassModule } from './class/class.module';
import { UserModule } from './users/user.module';
import { ClassTeacher } from './class-teacher/entity/class-teacher.entity';


@Module({
  imports: [
    StudentModule,
    ClassModule,
    UserModule,
    ClassTeacher,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'school-service',
      username: 'root',
      host: '127.0.0.1',
      port: 3306,
      synchronize: true,
      entities: ['dist/**/*.entity{.js,.ts}']
    }),
  ],
})
export class AppModule {}