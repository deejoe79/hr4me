/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateSectionArgs } from "./CreateSectionArgs";
import { UpdateSectionArgs } from "./UpdateSectionArgs";
import { DeleteSectionArgs } from "./DeleteSectionArgs";
import { SectionFindManyArgs } from "./SectionFindManyArgs";
import { SectionFindUniqueArgs } from "./SectionFindUniqueArgs";
import { Section } from "./Section";
import { SectionToFieldFindManyArgs } from "../../sectionToField/base/SectionToFieldFindManyArgs";
import { SectionToField } from "../../sectionToField/base/SectionToField";
import { Cv } from "../../cv/base/Cv";
import { SectionService } from "../section.service";

@graphql.Resolver(() => Section)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SectionResolverBase {
  constructor(
    protected readonly service: SectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "read",
    possession: "any",
  })
  async _sectionsMeta(
    @graphql.Args() args: SectionFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Section])
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "read",
    possession: "any",
  })
  async sections(
    @graphql.Args() args: SectionFindManyArgs
  ): Promise<Section[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Section, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "read",
    possession: "own",
  })
  async section(
    @graphql.Args() args: SectionFindUniqueArgs
  ): Promise<Section | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Section)
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "create",
    possession: "any",
  })
  async createSection(
    @graphql.Args() args: CreateSectionArgs
  ): Promise<Section> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        cv: args.data.cv
          ? {
              connect: args.data.cv,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Section)
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "update",
    possession: "any",
  })
  async updateSection(
    @graphql.Args() args: UpdateSectionArgs
  ): Promise<Section | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          cv: args.data.cv
            ? {
                connect: args.data.cv,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Section)
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "delete",
    possession: "any",
  })
  async deleteSection(
    @graphql.Args() args: DeleteSectionArgs
  ): Promise<Section | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SectionToField])
  @nestAccessControl.UseRoles({
    resource: "SectionToField",
    action: "read",
    possession: "any",
  })
  async sectionToFields(
    @graphql.Parent() parent: Section,
    @graphql.Args() args: SectionToFieldFindManyArgs
  ): Promise<SectionToField[]> {
    const results = await this.service.findSectionToFields(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Cv, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Cv",
    action: "read",
    possession: "any",
  })
  async cv(@graphql.Parent() parent: Section): Promise<Cv | null> {
    const result = await this.service.getCv(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}