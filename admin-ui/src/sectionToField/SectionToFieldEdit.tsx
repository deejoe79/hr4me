import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { FieldTitle } from "../field/FieldTitle";
import { SectionTitle } from "../section/SectionTitle";

export const SectionToFieldEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="field"
          reference="Field"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FieldTitle} />
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
    </Edit>
  );
};
