import { useEffect, useState } from "react";

import {
  ResponsiveProvider,
  ResponsiveRoute,
  useResponsiveNavigation,
} from "@/lib/responsive-navigation";

import SuccessRegisterScreen from "./SuccessRegisterScreen";
import SyaratDanKetentuanScreen from "./SyaratDanKetentuanScreen";
import FormLegalBadanUsahaScreen from "./components/FormLegalBadanUsahaScreen";
import FormLegalDagangATPMScreen from "./components/FormLegalDagangATPMScreen";
import FormLegalDagangDistributorScreen from "./components/FormLegalDagangDistributorScreen";
import FormLegalDagangImportirScreen from "./components/FormLegalDagangImportirScreen";
import FormLegalDagangManufakturScreen from "./components/FormLegalDagangManufakturScreen";
import InterRegisterScreen from "./components/InterRegisterScreen";

const UpDokumenLegalResponsive = ({ type = "default" }) => {
  return (
    <ResponsiveProvider>
      <Inner />
    </ResponsiveProvider>
  );
};
const Inner = ({ type = "default" }) => {
  const navigate = useResponsiveNavigation();

  const defaultQueryParams = {
    page: 1,
    limit: 10,
    status: "",
    search: "",
    startDate: null,
    endDate: null,
    sort: "",
    order: "",
  };

  const [queryParams, setQueryParams] = useState(defaultQueryParams);
  return (
    <>
      <ResponsiveRoute
        path="/123"
        component={
          <FormLegalDagangImportirScreen
            type={type}
            queryParams={queryParams}
          />
        }
      />
      <ResponsiveRoute
        path="/badan-usaha"
        component={
          <FormLegalBadanUsahaScreen type={type} queryParams={queryParams} />
        }
      />
      <ResponsiveRoute
        path="/dagang-manufaktur"
        component={
          <FormLegalDagangManufakturScreen
            type={type}
            queryParams={queryParams}
          />
        }
      />
      <ResponsiveRoute
        path="/dagang-atpm"
        component={
          <FormLegalDagangATPMScreen type={type} queryParams={queryParams} />
        }
      />
      <ResponsiveRoute
        path="/dagang-distributor"
        component={
          <FormLegalDagangDistributorScreen
            type={type}
            queryParams={queryParams}
          />
        }
      />
      <ResponsiveRoute
        path="/syarat-dan-ketentuan"
        component={
          <SyaratDanKetentuanScreen type={type} queryParams={queryParams} />
        }
      />
      <ResponsiveRoute
        path="/success-register"
        component={
          <SuccessRegisterScreen type={type} queryParams={queryParams} />
        }
      />
      <ResponsiveRoute
        path="/"
        component={
          <InterRegisterScreen type={type} queryParams={queryParams} />
        }
      />
    </>
  );
};

export default UpDokumenLegalResponsive;
