/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType } from "@nestjs/graphql";
import { Field } from "../../field/base/Field";
import { SectionToFieldWhereUniqueInput } from "../../sectionToField/base/SectionToFieldWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class SectionToFieldCreateNestedManyWithoutSectionsInput {
  @Field(() => [SectionToFieldWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SectionToFieldWhereUniqueInput],
  })
  connect?: Array<SectionToFieldWhereUniqueInput>;
}
export { SectionToFieldCreateNestedManyWithoutSectionsInput };
