import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FieldItemResolverBase } from "./base/fieldItem.resolver.base";
import { FieldItem } from "./base/FieldItem";
import { FieldItemService } from "./fieldItem.service";

@graphql.Resolver(() => FieldItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FieldItemResolver extends FieldItemResolverBase {
  constructor(
    protected readonly service: FieldItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
