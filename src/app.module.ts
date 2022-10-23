import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArsipModule } from './arsip/arsip.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { KlasifikasiModule } from './klasifikasi/klasifikasi.module';


@Module({
  imports: [ArsipModule, 
    GraphQLModule.forRoot <ApolloDriverConfig> ({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({

      /* for MySQL */

      /*
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'WebArsip',
      retryAttempts:2,
      autoLoadEntities: true,
      */

      /* for SQLite */

      type: 'sqlite',
      database: ':memory:',

      entities: ['dist/**/*.entity{.ts,.js}'],
      
      //SQLite pakai true, MySQL pake false
      synchronize: true, 
      
    }),
    UserModule,
    AuthModule,
    KlasifikasiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
