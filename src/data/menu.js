import { Login } from "../page/Login";
import { Signup } from "../page/Signup";

export const menu = [
  { link: "/login", title: "기관로그인", comp: <Login /> },
  { link: "/signup", title: "신규기관등록", comp: <Signup /> },
];
