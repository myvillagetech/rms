import { Injectable } from '@nestjs/common';
import { CreateBasicDetailDto } from './dto/create-basic-detail.dto';
import { UpdateBasicDetailDto } from './dto/update-basic-detail.dto';

@Injectable()
export class BasicDetailsService {
  create(createBasicDetailDto: CreateBasicDetailDto) {
    return 'This action adds a new basicDetail';
  }

  findAll() {
    return `This action returns all basicDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicDetail`;
  }

  update(id: number, updateBasicDetailDto: UpdateBasicDetailDto) {
    return `This action updates a #${id} basicDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicDetail`;
  }
}
