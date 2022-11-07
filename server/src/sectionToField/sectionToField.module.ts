import { Module } from "@nestjs/common";
import { SectionToFieldModuleBase } from "./base/sectionToField.module.base";
import { SectionToFieldService } from "./sectionToField.service";
import { SectionToFieldController } from "./sectionToField.controller";
import { SectionToFieldResolver } from "./sectionToField.resolver";

@Module({
  imports: [SectionToFieldModuleBase],
  controllers: [SectionToFieldController],
  providers: [SectionToFieldService, SectionToFieldResolver],
  exports: [SectionToFieldService],
})
export class SectionToFieldModule {}
