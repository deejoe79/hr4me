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
import { CreateSectionToFieldArgs } from "./CreateSectionToFieldArgs";
import { UpdateSectionToFieldArgs } from "./UpdateSectionToFieldArgs";
import { DeleteSectionToFieldArgs } from "./DeleteSectionToFieldArgs";
import { SectionToFieldFindManyArgs } from "./SectionToFieldFindManyArgs";
import { SectionToFieldFindUniqueArgs } from "./SectionToFieldFindUniqueArgs";
import { SectionToField } from "./SectionToField";
import { FieldFindManyArgs } from "../../field/base/FieldFindManyArgs";
import { Field } from "../../field/base/Field";
import { SectionFindManyArgs } from "../../section/base/SectionFindManyArgs";
import { Section } from "../../section/base/Section";
import { SectionToFieldService } from "../sectionToField.service";

@graphql.Resolver(() => SectionToField)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SectionToFieldResolverBase {
  constructor(
    protected readonly service: SectionToFieldService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SectionToField",
    action: "read",
    possession: "any",
  })
  async _sectionToFieldsMeta(
    @graphql.Args() args: SectionToFieldFindManyArgs
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
  @graphql.Query(() => [SectionToField])
  @nestAccessControl.UseRoles({
    resource: "SectionToField",
    action: "read",
    possession: "any",
  })
  async sectionToFields(
    @graphql.Args() args: SectionToFieldFindManyArgs
  ): Promise<SectionToField[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SectionToField, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SectionToField",
    action: "read",
    possession: "own",
  })
  async sectionToField(
    @graphql.Args() args: SectionToFieldFindUniqueArgs
  ): Promise<SectionToField | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SectionToField)
  @nestAccessControl.UseRoles({
    resource: "SectionToField",
    action: "create",
    possession: "any",
  })
  async createSectionToField(
    @graphql.Args() args: CreateSectionToFieldArgs
  ): Promise<SectionToField> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SectionToField)
  @nestAccessControl.UseRoles({
    resource: "SectionToField",
    action: "update",
    possession: "any",
  })
  async updateSectionToField(
    @graphql.Args() args: UpdateSectionToFieldArgs
  ): Promise<SectionToField | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => SectionToField)
  @nestAccessControl.UseRoles({
    resource: "SectionToField",
    action: "delete",
    possession: "any",
  })
  async deleteSectionToField(
    @graphql.Args() args: DeleteSectionToFieldArgs
  ): Promise<SectionToField | null> {
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
  @graphql.ResolveField(() => [Field])
  @nestAccessControl.UseRoles({
    resource: "Field",
    action: "read",
    possession: "any",
  })
  async field(
    @graphql.Parent() parent: SectionToField,
    @graphql.Args() args: FieldFindManyArgs
  ): Promise<Field[]> {
    const results = await this.service.findField(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Section])
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "read",
    possession: "any",
  })
  async section(
    @graphql.Parent() parent: SectionToField,
    @graphql.Args() args: SectionFindManyArgs
  ): Promise<Section[]> {
    const results = await this.service.findSection(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}