import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateSalesDataDto {
    @IsString()
    @ApiProperty({
        type: String
    })
    salesPersonName:string
}