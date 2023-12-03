import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDataModule } from './user-data/user-data.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserDataModule,
    MongooseModule.forRoot('mongodb://localhost:27017/userdata')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
