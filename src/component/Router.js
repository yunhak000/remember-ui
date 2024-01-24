import { Route, Routes } from "react-router-dom";
import { Intro } from "../page/Intro";
import { Signup } from "../page/Signup";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
