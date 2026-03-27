import { PartialType } from '@nestjs/mapped-types';
import { CreatePokiDto } from './create-poki.dto';

export class UpdatePokiDto extends PartialType(CreatePokiDto) {}
