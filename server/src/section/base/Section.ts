/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Cv } from "../../cv/base/Cv";
import { SectionToField } from "../../sectionToField/base/SectionToField";
import { EnumSectionSectionType } from "./EnumSectionSectionType";
@ObjectType()
class Section {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  columnCount!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Cv,
  })
  @ValidateNested()
  @Type(() => Cv)
  @IsOptional()
  cv?: Cv | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [SectionToField],
  })
  @ValidateNested()
  @Type(() => SectionToField)
  @IsOptional()
  sectionToFields?: Array<SectionToField>;

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
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Section };
