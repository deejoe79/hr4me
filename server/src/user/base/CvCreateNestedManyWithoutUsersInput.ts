/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CvWhereUniqueInput } from "../../cv/base/CvWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class CvCreateNestedManyWithoutUsersInput {
  @Field(() => [CvWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CvWhereUniqueInput],
  })
  connect?: Array<CvWhereUniqueInput>;
}
export { CvCreateNestedManyWithoutUsersInput };
