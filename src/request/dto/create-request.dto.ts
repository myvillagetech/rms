import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRequestDto {
    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    rfqStatus: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    persons: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    quoteStatus: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    paymentStatus: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    quoteSubmittedTo: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    rfqReceivedDate: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    quoteAmount: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    exw: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    quoteNo: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    paymentReceivedDate: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    quoteSubDate: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    invoiceAmount: string;

    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    @IsString()
    invoiceDate: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    invoiceNo: string;

    @ApiProperty({ 
        type: String 
    })
    @IsNotEmpty()
    @IsString()
    description: string;
}
