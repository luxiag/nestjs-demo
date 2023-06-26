import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import Configuration from './configuration';
import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';

const envFilePath = `.env.${process.env.NODE_ENV || `development`} `;

console.log(envFilePath, 'aa');
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath,
      // load: [() => dotenv.config({ path: envFilePath })],
      load: [Configuration],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        DB_PORT: Joi.number().default(3306),
        DB_HOST: Joi.string().ip(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'testdb',
      entities: [],
      synchronize: true,
      logging: ['error'],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
