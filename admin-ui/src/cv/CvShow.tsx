import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CV_TITLE_FIELD } from "./CvTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CvShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Section" target="CvId" label="Sections">
          <Datagrid rowClick="show">
            <TextField label="Column Count" source="columnCount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="CV" source="cv.id" reference="Cv">
              <TextField source={CV_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Section Type" source="sectionType" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
