import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SectionToFieldServiceBase } from "./base/sectionToField.service.base";

@Injectable()
export class SectionToFieldService extends SectionToFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
