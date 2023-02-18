import { PartialType } from '@nestjs/swagger';
import { CreateBasicDetailDto } from './create-basic-detail.dto';

export class UpdateBasicDetailDto extends PartialType(CreateBasicDetailDto) {}
