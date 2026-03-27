import { Module } from '@nestjs/common';
import { PokiService } from './poki.service';
import { PokiController } from './poki.controller';
import { Poki, PokiSchema } from './entities/poki.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Poki.name,
        schema: PokiSchema,
      },
    ]),
  ],

  controllers: [PokiController],
  providers: [PokiService],
})
export class PokiModule {}