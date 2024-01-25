import { Route, Routes } from "react-router-dom";
import { Intro } from "../page/Intro";
import { menu } from "../data/menu";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      {menu.map((item) => (
        <Route path={item.link} element={item.comp} />
      ))}
    </Routes>
  );
};
