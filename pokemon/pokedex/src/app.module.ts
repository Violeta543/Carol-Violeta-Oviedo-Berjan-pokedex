import { Module } from '@nestjs/common';
import {  MongooseModule } from '@nestjs/mongoose';
import { PokiModule } from './poki/poki.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pokemon-v2'),
    PokiModule,
    PokiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
