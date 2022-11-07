import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SectionToFieldTitle } from "../sectionToField/SectionToFieldTitle";

export const FieldItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
