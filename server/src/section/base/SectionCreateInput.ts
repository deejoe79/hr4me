/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
} from "class-validator";
import { CvWhereUniqueInput } from "../../cv/base/CvWhereUniqueInput";
import { Type } from "class-transformer";
import { SectionToFieldCreateNestedManyWithoutSectionsInput } from "./SectionToFieldCreateNestedManyWithoutSectionsInput";
import { EnumSectionSectionType } from "./EnumSectionSectionType";
@InputType()
class SectionCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  columnCount!: number;

  @ApiProperty({
    required: false,
    type: () => CvWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CvWhereUniqueInput)
  @IsOptional()
  @Field(() => CvWhereUniqueInput, {
    nullable: true,
  })
  cv?: CvWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SectionToFieldCreateNestedManyWithoutSectionsInput,
  })
  @ValidateNested()
  @Type(() => SectionToFieldCreateNestedManyWithoutSectionsInput)
  @IsOptional()
  @Field(() => SectionToFieldCreateNestedManyWithoutSectionsInput, {
    nullable: true,
  })
  sectionToFields?: SectionToFieldCreateNestedManyWithoutSectionsInput;

  @ApiProperty({
    required: false,
    enum: EnumSectionSectionType,
  })
  @IsEnum(EnumSectionSectionType)
  @IsOptional()
  @Field(() => EnumSectionSectionType, {
    nullable: true,
  })
  sectionType?:
    | "Simple"
    | "TwoFields"
    | "ThreeFields"
    | "FourFields"
    | "FiveFields"
    | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}
export { SectionCreateInput };
