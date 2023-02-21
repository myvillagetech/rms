import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateBasicDetailsDto } from './create-basic-detail.dto';
import { IsString } from 'class-validator';


export class UpdateBasicDetailsDto extends PartialType(CreateBasicDetailsDto) {
    @ApiProperty({ type: String })
    @IsString()
    readonly rfqStatus: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly quoteStatus: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly paymentStatus: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly quoteSubmittedTo: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly rfqReceivedDate: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly quoteAmount: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly exw: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly quoteNo: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly paymentReceivedDate: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly quoteSubDate: string;
  
    // @ApiProperty({ type: String })
    // @IsString()
    // readonly maxCost: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly invoiceAmount: string;
  
    @ApiProperty({ type: String })
    @IsString()
   readonly  invoiceDate: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly invoiceNo: string;
  
    @ApiProperty({ type: String })
    @IsString()
    readonly description: string;
  
}
