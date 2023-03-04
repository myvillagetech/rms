import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { CriteriaWithPaginationAndSorting } from "src/shared/DTOs/criteiaWithPaginationAndSorting";

export class RequestSearchCriteriaDto extends CriteriaWithPaginationAndSorting{
    @IsString()
    @ApiProperty({
        type: String
    })
    readonly serachTerm: string;

    @ApiProperty({
        type: Array<String>
    })
    readonly rfqStatus: string[];

    @ApiProperty({
        type : Array<String>
    })
    readonly salesPersons : string[];

    @ApiProperty({
        type: Array<String>
    })
    readonly quoteStatus: string[];

    @ApiProperty({
        type: Array<String>
    })
    readonly paymentStatus: string[];

    @ApiProperty({
        type: Array<String>
    })
    readonly quoteSubmittedTo: string[];

}