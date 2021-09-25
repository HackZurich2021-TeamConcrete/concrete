/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-
.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import OverviewCard from "components/Card/OverviewCard.js"
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Build Rd. 420",
    icon: OverviewCard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Second Street 11",
    icon: OverviewCard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Fantasy Lane 123",
    icon: OverviewCard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Boring Av. 69",
    icon: OverviewCard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Duckstreet 404",
    icon: OverviewCard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Lost Lane 678",
    icon: OverviewCard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "End of the World Av. 12",
    icon: OverviewCard,
    component: DashboardPage,
    layout: "/admin",
  },
];

export default dashboardRoutes;
