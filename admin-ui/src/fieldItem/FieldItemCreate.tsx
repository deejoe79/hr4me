import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SectionToFieldTitle } from "../sectionToField/SectionToFieldTitle";

export const FieldItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="fieldType"
          label="FieldType"
          choices={[
            { label: "SingleLineText", value: "SingleLineText" },
            { label: "Number", value: "Number" },
            { label: "MultiLineText", value: "MultiLineText" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Field Value" multiline source="fieldValue" />
        <ReferenceArrayInput
          source="sectionToFields"
          reference="SectionToField"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SectionToFieldTitle} />
        </ReferenceArrayInput>
        <TextInput label="Title" source="title" />
        <SelectInput
          source="validationType"
          label="ValidationType"
          choices={[
            { label: "Email", value: "Email" },
            { label: "Web", value: "Web" },
            { label: "Number", value: "Number" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
