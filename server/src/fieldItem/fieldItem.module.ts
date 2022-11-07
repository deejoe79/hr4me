import { Module } from "@nestjs/common";
import { FieldItemModuleBase } from "./base/fieldItem.module.base";
import { FieldItemService } from "./fieldItem.service";
import { FieldItemController } from "./fieldItem.controller";
import { FieldItemResolver } from "./fieldItem.resolver";

@Module({
  imports: [FieldItemModuleBase],
  controllers: [FieldItemController],
  providers: [FieldItemService, FieldItemResolver],
  exports: [FieldItemService],
})
export class FieldItemModule {}
