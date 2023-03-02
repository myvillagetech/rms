import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AddSalespersonDataDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    salespersonName:string
}