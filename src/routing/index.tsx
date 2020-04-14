import React from "react";

import Map from "../components/map";
import BookBoxList from "../components/bookBoxList";

const Error404: React.FC = () => {
  return <div>404 Page</div>;
};

export interface RouteType {
	component: React.FC<{}>;
  path?: string;
  key: string;
}

const routes: RouteType[] = [
  {
    component: Map,
    path: "/",
    key: 'map'
  },
  {
    component: BookBoxList,
    path: "/list",
    key: 'list'
  },
  {
    component: Error404,
    key: 'error404'
  }
];

export default routes;
