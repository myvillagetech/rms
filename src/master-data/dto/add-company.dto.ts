import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AddCompanyDataDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    name:string
}
