import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AddSalespersonDataDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    salesperson:string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    companyId:string

}