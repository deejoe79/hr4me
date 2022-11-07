import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FieldItemService } from "./fieldItem.service";
import { FieldItemControllerBase } from "./base/fieldItem.controller.base";

@swagger.ApiTags("fieldItems")
@common.Controller("fieldItems")
export class FieldItemController extends FieldItemControllerBase {
  constructor(
    protected readonly service: FieldItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
