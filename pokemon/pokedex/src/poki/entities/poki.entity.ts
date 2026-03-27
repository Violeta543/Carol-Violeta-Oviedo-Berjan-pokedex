import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Poki extends Document {
  @Prop({
    unique: true,
    index: true,
    require: true,
    trim: true,
  })
  name: string;
  @Prop({
    unique: true,
    index: true,
    require: true,
    min: 1,
  })
  no: number;

  @Prop({
    default: false,
    index: true,
  })
  isCaptured: boolean;
}

export const PokiSchema = SchemaFactory.createForClass(Poki);