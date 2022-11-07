import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SectionToFieldResolverBase } from "./base/sectionToField.resolver.base";
import { SectionToField } from "./base/SectionToField";
import { SectionToFieldService } from "./sectionToField.service";

@graphql.Resolver(() => SectionToField)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SectionToFieldResolver extends SectionToFieldResolverBase {
  constructor(
    protected readonly service: SectionToFieldService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
