/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType } from "@nestjs/graphql";
import { Field } from "../../field/base/Field";
import { SectionCreateInput } from "./SectionCreateInput";

@ArgsType()
class CreateSectionArgs {
  @Field(() => SectionCreateInput, { nullable: false })
  data!: SectionCreateInput;
}

export { CreateSectionArgs };