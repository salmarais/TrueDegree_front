/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserPage from "views/User.js";
import Search from "./views/Search";
import Diplomas from "./views/Diplomas";
import Requests from "./views/Requests";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/search",
    name: "Search",
    icon: "nc-icon nc-caps-small",
    component: Search,
    layout: "/admin",
  },{
    path: "/search",
    name: "Search",
    icon: "nc-icon nc-caps-small",
    component: Search,
    layout: "/home",
  },{
    path: "/diplomas",
    name: "Diplomas",
    icon: "nc-icon nc-caps-small",
    component: Diplomas,
    layout: "/admin",
  },{
    path: "/requests",
    name: "Requests",
    icon: "nc-icon nc-caps-small",
    component: Requests,
    layout: "/admin",
  }
];
export default routes;
