import { OrganizationalManagement } from "../page/OrganizationalManagement";
import { Login } from "../page/Login";
import { Signup } from "../page/Signup";

export const menu = [
  { link: "/login", title: "기관로그인", isBackgroundColorWhite: true, comp: <Login /> },
  { link: "/signup", title: "신규기관등록", isBackgroundColorWhite: true, comp: <Signup /> },
  { link: "/organizational-management", title: "기관관리화면", isBackgroundColorWhite: false, comp: <OrganizationalManagement /> },
];
