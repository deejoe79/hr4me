import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CvService } from "./cv.service";
import { CvControllerBase } from "./base/cv.controller.base";

@swagger.ApiTags("cvs")
@common.Controller("cvs")
export class CvController extends CvControllerBase {
  constructor(
    protected readonly service: CvService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
