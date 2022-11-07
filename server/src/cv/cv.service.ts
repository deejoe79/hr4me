import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CvServiceBase } from "./base/cv.service.base";

@Injectable()
export class CvService extends CvServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
