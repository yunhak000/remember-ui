import { Route, Routes } from "react-router-dom";
import { Intro } from "../page/Intro";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
};
