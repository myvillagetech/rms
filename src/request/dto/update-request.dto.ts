import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateRequestDto } from './create-request.dto';

export class UpdateRequestDto extends PartialType(CreateRequestDto) {
    @ApiProperty({
        type: String
    })
    @IsString()
    title: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    rfqStatus: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    persons: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    quoteStatus: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    paymentStatus: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    quoteSubmittedTo: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    rfqReceivedDate: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    quoteAmount: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    exw: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    quoteNo: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    paymentReceivedDate: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    quoteSubDate: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    invoiceAmount: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    invoiceDate: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    invoiceNo: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    description: string;
}
