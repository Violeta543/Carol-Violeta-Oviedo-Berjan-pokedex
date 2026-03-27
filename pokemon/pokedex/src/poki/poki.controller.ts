import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreatePokiDto } from './dto/create-poki.dto';
import { UpdatePokiDto } from './dto/update-poki.dto';
import { PokiService } from './poki.service';

@Controller('poki')
export class PokiController {
  constructor(private readonly pokiService: PokiService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  create(@Body() createPokiDto: CreatePokiDto) {
    return this.pokiService.create(createPokiDto);
  }

  @Get()
  findAll() {
    return this.pokiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokiDto: UpdatePokiDto) {
    return this.pokiService.update(id, updatePokiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokiService.remove(id);
  }
}