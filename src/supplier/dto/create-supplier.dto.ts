import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateSupplierDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    supplierName: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        type: Boolean
    })
    avalability : boolean

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        type: Boolean
    })
    sup : boolean

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    contactName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    phone: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    price: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    SandH: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    cc: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    sTotal: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    leadTimeWK: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    shipCostMax: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    shipCostMin: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    basicDetailsId : string



}
