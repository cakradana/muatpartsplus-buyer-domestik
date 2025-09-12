import { useState } from "react";

import {
  ResponsiveProvider,
  ResponsiveRoute,
} from "@/lib/responsive-navigation";

import NotifScreen from "./NotifScreen";

const NotifikasiResponsive = ({ type = "default" }) => {
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
    <ResponsiveProvider>
      <ResponsiveRoute
        path="/"
        component={<NotifScreen type={type} queryParams={queryParams} />}
      />
    </ResponsiveProvider>
  );
};

export default NotifikasiResponsive;
