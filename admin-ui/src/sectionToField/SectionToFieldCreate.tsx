import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { FieldItemTitle } from "../fieldItem/FieldItemTitle";
import { SectionTitle } from "../section/SectionTitle";

export const SectionToFieldCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="field"
          reference="FieldItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FieldItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="section"
          reference="Section"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SectionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
