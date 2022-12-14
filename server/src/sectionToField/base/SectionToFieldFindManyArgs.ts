/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SectionToFieldWhereInput } from "./SectionToFieldWhereInput";
import { Type } from "class-transformer";
import { SectionToFieldOrderByInput } from "./SectionToFieldOrderByInput";

@ArgsType()
class SectionToFieldFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SectionToFieldWhereInput,
  })
  @Field(() => SectionToFieldWhereInput, { nullable: true })
  @Type(() => SectionToFieldWhereInput)
  where?: SectionToFieldWhereInput;

  @ApiProperty({
    required: false,
    type: [SectionToFieldOrderByInput],
  })
  @Field(() => [SectionToFieldOrderByInput], { nullable: true })
  @Type(() => SectionToFieldOrderByInput)
  orderBy?: Array<SectionToFieldOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SectionToFieldFindManyArgs };
