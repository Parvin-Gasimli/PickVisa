import React from "react";
import { useRoutes } from "react-router-dom";
import mainRoutes from "./mainRoutes";


export default function Routes() {
  return useRoutes([mainRoutes()]);
}
