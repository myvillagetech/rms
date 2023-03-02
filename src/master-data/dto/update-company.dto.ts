import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { AddCompanyDataDto } from './add-company.dto';

export class UpdateCompanyDataDto extends PartialType(AddCompanyDataDto) {
    @IsString()
    @ApiProperty({
        type: String
    })
    name:string
}
