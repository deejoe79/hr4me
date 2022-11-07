import { Module } from "@nestjs/common";
import { CvModuleBase } from "./base/cv.module.base";
import { CvService } from "./cv.service";
import { CvController } from "./cv.controller";
import { CvResolver } from "./cv.resolver";

@Module({
  imports: [CvModuleBase],
  controllers: [CvController],
  providers: [CvService, CvResolver],
  exports: [CvService],
})
export class CvModule {}
