import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CvTitle } from "../cv/CvTitle";
import { SectionToFieldTitle } from "../sectionToField/SectionToFieldTitle";

export const SectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Column Count" source="columnCount" />
        <ReferenceInput source="cv.id" reference="Cv" label="CV">
          <SelectInput optionText={CvTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="sectionToFields"
          reference="SectionToField"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SectionToFieldTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="sectionType"
          label="Section Type"
          choices={[
            { label: "Simple", value: "Simple" },
            { label: "TwoFields", value: "TwoFields" },
            { label: "ThreeFields", value: "ThreeFields" },
            { label: "FourFields", value: "FourFields" },
            { label: "FiveFields", value: "FiveFields" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
