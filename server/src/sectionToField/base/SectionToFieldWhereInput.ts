/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FieldListRelationFilter } from "../../field/base/FieldListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Field } from "../../field/base/Field";
import { StringFilter } from "../../util/StringFilter";
import { SectionListRelationFilter } from "../../section/base/SectionListRelationFilter";
@InputType()
class SectionToFieldWhereInput {
  @ApiProperty({
    required: false,
    type: () => FieldListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FieldListRelationFilter)
  @IsOptional()
  @Field(() => FieldListRelationFilter, {
    nullable: true,
  })
  field?: FieldListRelationFilter;

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
    type: () => SectionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SectionListRelationFilter)
  @IsOptional()
  @Field(() => SectionListRelationFilter, {
    nullable: true,
  })
  section?: SectionListRelationFilter;
}
export { SectionToFieldWhereInput };