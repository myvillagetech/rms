import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateSalespersonDataDto {
    @IsString()
    @ApiProperty({
        type: String
    })
    salesperson:string

    @IsString()
    @ApiProperty({
        type: String
    })
    companyId:string
}