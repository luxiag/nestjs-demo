import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import Configuration from './configuration';

const envFilePath = `.env.${process.env.NODE_ENV || `development`} `;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //envFilePath
      load: [Configuration],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
