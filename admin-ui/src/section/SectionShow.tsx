import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CV_TITLE_FIELD } from "../cv/CvTitle";

export const SectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Column Count" source="columnCount" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="CV" source="cv.id" reference="Cv">
          <TextField source={CV_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Section Type" source="sectionType" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
