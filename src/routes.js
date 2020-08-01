/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Sms from "@material-ui/icons/Sms";
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import Chat from "views/Chat/Chat.js";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserAccount from "views/UserAccount/UserAccount.js";
import EditAccount from "views/UserAccount/EditAccount.js";
import UpdatePage from "views/UserAccount/UpdatePage.js";

import InboxIcon from '@material-ui/icons/Inbox';

// self
import TenantPay from "views/Payments/TenantPay.js";
import TenantPayPages from "views/Payments/TenantPayPages.js";
import OfficeCheckPay from "views/Payments/OfficeCheckPay.js";
import TenantPayHistory from "views/Payments/TenantPayHistory.js";

import PackageManager from "./views/Package/PackageManager";
import PackageResident from "./views/Package/PackageResident";

export const routesTenant = [

  {
    path: "/officeCheckPayment",
    name: "Office Check Payment History",
    rtlName: "مكتب الدفع تاريخ الشيكات",
    icon: Dashboard,
    component: OfficeCheckPay,
    layout: "/admin"
  },
  {
    path: "/tenantPayment",
    name: "Tenant Payment",
    rtlName: "دفع المستأجر",
    icon: Dashboard,
    component: TenantPay,
    layout: "/admin"
  },
  {
    path: "/tenantPaymentPages",
    name: "Tenant Payment Page",
    rtlName: "صفحات دفع المستأجر",
    icon: Dashboard,
    component: TenantPayPages,
    layout: "/admin"
  },
  {
    path: "/tenantPayHistory",
    name: "Tenant Payment History",
    rtlName: "تاريخ دفع المستأجر\n",
    icon: Dashboard,
    component: TenantPayHistory,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/chat",
    name: "Chat",
    rtlName: "لوحة القيادة",
    icon: Sms,
    component: Chat,
    layout: "/admin"
  },
  {
    path: "/update",
    name: "Update Account",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: UpdatePage,
    layout: "/admin"
  },
  {
    path: "/packageResident",
    name: "PackageResident",
    icon: InboxIcon,
    component: PackageResident,
    layout: "/admin"
  },
];

export const routesManager = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/chat",
    name: "Chat",
    rtlName: "لوحة القيادة",
    icon: Sms,
    component: Chat,
    layout: "/admin"
  },
  {
    path: "/edit_delete_account",
    name: "Edit / Delete Account",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: EditAccount,
    layout: "/admin"
  },
  {
    path: "/create_account",
    name: "Create Account",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserAccount,
    layout: "/admin"
  },
  {
    path: "/package",
    name: "Package",
    icon: InboxIcon,
    component: PackageManager,
    layout: "/admin"
  },
];

