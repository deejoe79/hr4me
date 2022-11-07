import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SectionToFieldService } from "./sectionToField.service";
import { SectionToFieldControllerBase } from "./base/sectionToField.controller.base";

@swagger.ApiTags("sectionToFields")
@common.Controller("sectionToFields")
export class SectionToFieldController extends SectionToFieldControllerBase {
  constructor(
    protected readonly service: SectionToFieldService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
