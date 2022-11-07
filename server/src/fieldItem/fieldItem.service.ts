import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FieldItemServiceBase } from "./base/fieldItem.service.base";

@Injectable()
export class FieldItemService extends FieldItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
