/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType } from "@nestjs/graphql";
import { Field } from "./Field";
import { FieldWhereUniqueInput } from "./FieldWhereUniqueInput";

@ArgsType()
class FieldFindUniqueArgs {
  @Field(() => FieldWhereUniqueInput, { nullable: false })
  where!: FieldWhereUniqueInput;
}

export { FieldFindUniqueArgs };
