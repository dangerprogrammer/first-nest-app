import { PartialType } from '@nestjs/mapped-types';
import { CreateInnerUserDto } from './create-inner-user.dto';

export class UpdateInnerUserDto extends PartialType(CreateInnerUserDto) {}
