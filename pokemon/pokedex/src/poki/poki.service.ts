import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePokiDto } from './dto/create-poki.dto';
import { UpdatePokiDto } from './dto/update-poki.dto';
import { Poki } from './entities/poki.entity';

@Injectable()
export class PokiService {
  constructor(
    @InjectModel(Poki.name)
    private readonly pokiModel: Model<Poki>,
  ) {}

  async create(createPokiDto: CreatePokiDto) {
    return this.pokiModel.create({
      ...createPokiDto,
      name: createPokiDto.name.toLowerCase().trim(),
    });
  }

  async findAll() {
    return this.pokiModel.find().sort({ no: 1 }).lean();
  }

  async findOne(id: string) {
    const Poki = await this.pokiModel.findById(id).lean();
    if (!Poki) throw new NotFoundException(`Pokemon ${id} no encontrado`);
    return Poki;
  }

  async update(id: string, updatePokiDto: UpdatePokiDto) {
    const updated = await this.pokiModel
      .findByIdAndUpdate(id, updatePokiDto, { new: true })
      .lean();
    if (!updated) throw new NotFoundException(`Pokemon ${id} no encontrado`);
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.pokiModel.findByIdAndDelete(id).lean();
    if (!deleted) throw new NotFoundException(`Pokemon ${id} no encontrado`);
    return { message: `Pokemon eliminado correctamente` };
  }
}