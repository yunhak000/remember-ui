import { Route, Routes } from "react-router-dom";
import { Intro } from "../page/Intro";
import { Signup } from "../page/Signup";
import { Login } from "../page/Login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
