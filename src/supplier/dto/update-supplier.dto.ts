import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import { CreateSupplierDto } from './create-supplier.dto';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {
    @IsString()
    @ApiProperty({
        type: String
    })
    supplierName: string;

    @IsBoolean()
    @ApiProperty({
        type: Boolean
    })
    avalability : boolean

    @IsBoolean()
    @ApiProperty({
        type: Boolean
    })
    preferredSuplier : boolean

    @IsString()
    @ApiProperty({
        type: String
    })
    contactName: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    email: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    phone: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    price: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    SandH: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    cc: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    sTotal: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    leadTimeWK: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    shipCostMax: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    shipCostMin: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    totalCost : string

    @IsString()
    @ApiProperty({
        type: String
    })
    requstId : string

   
}
