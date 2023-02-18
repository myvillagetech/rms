import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasicDetailsService } from './basic-details.service';
import { CreateBasicDetailDto } from './dto/create-basic-detail.dto';
import { UpdateBasicDetailDto } from './dto/update-basic-detail.dto';

@Controller('basic-details')
@ApiTags('basic-details')

export class BasicDetailsController {
  constructor(private readonly basicDetailsService: BasicDetailsService) {}

  @Post()
  create(@Body() createBasicDetailDto: CreateBasicDetailDto) {
    return this.basicDetailsService.create(createBasicDetailDto);
  }

  @Get()
  findAll() {
    return this.basicDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basicDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasicDetailDto: UpdateBasicDetailDto) {
    return this.basicDetailsService.update(+id, updateBasicDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basicDetailsService.remove(+id);
  }
}
