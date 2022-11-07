import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  PasswordInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

import { CvTitle } from "../cv/CvTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="cvs"
          reference="Cv"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CvTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <DateTimeInput label="Last Login Date" source="lastLoginDate" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="StillAvailable" source="stillAvailable" />
        <TextInput label="Username" source="username" />
        <SelectInput
          source="userType"
          label="User Type"
          choices={[
            { label: "Job Seeker", value: "JobSeeker" },
            { label: "Employer", value: "Employer" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
