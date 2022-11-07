import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { SectionList } from "./section/SectionList";
import { SectionCreate } from "./section/SectionCreate";
import { SectionEdit } from "./section/SectionEdit";
import { SectionShow } from "./section/SectionShow";
import { FieldList } from "./field/FieldList";
import { FieldCreate } from "./field/FieldCreate";
import { FieldEdit } from "./field/FieldEdit";
import { FieldShow } from "./field/FieldShow";
import { SectionToFieldList } from "./sectionToField/SectionToFieldList";
import { SectionToFieldCreate } from "./sectionToField/SectionToFieldCreate";
import { SectionToFieldEdit } from "./sectionToField/SectionToFieldEdit";
import { SectionToFieldShow } from "./sectionToField/SectionToFieldShow";
import { CvList } from "./cv/CvList";
import { CvCreate } from "./cv/CvCreate";
import { CvEdit } from "./cv/CvEdit";
import { CvShow } from "./cv/CvShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BackendService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Section"
          list={SectionList}
          edit={SectionEdit}
          create={SectionCreate}
          show={SectionShow}
        />
        <Resource
          name="Field"
          list={FieldList}
          edit={FieldEdit}
          create={FieldCreate}
          show={FieldShow}
        />
        <Resource
          name="SectionToField"
          list={SectionToFieldList}
          edit={SectionToFieldEdit}
          create={SectionToFieldCreate}
          show={SectionToFieldShow}
        />
        <Resource
          name="Cv"
          list={CvList}
          edit={CvEdit}
          create={CvCreate}
          show={CvShow}
        />
      </Admin>
    </div>
  );
};

export default App;
