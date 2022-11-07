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
import { EnumFieldItemFieldType } from "./EnumFieldItemFieldType";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { SectionToFieldListRelationFilter } from "../../sectionToField/base/SectionToFieldListRelationFilter";
import { EnumFieldItemValidationType } from "./EnumFieldItemValidationType";
@InputType()
class FieldItemWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumFieldItemFieldType,
  })
  @IsEnum(EnumFieldItemFieldType)
  @IsOptional()
  @Field(() => EnumFieldItemFieldType, {
    nullable: true,
  })
  fieldType?: "SingleLineText" | "Number" | "MultiLineText";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fieldValue?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => SectionToFieldListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SectionToFieldListRelationFilter)
  @IsOptional()
  @Field(() => SectionToFieldListRelationFilter, {
    nullable: true,
  })
  sectionToFields?: SectionToFieldListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  title?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumFieldItemValidationType,
  })
  @IsEnum(EnumFieldItemValidationType)
  @IsOptional()
  @Field(() => EnumFieldItemValidationType, {
    nullable: true,
  })
  validationType?: "Email" | "Web" | "Number";
}
export { FieldItemWhereInput };