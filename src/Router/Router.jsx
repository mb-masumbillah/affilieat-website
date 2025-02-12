import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home";
import EightMonthPage from "../Page/EightMonthPage";
import NineMonthPage from "../Page/NineMonthPage";
import SixMonthPage from "../Page/SixMonthPage";
import SevenMonthPage from "../Page/SevenMonthPage";
import TenMonthPage from "../Page/TenMonthPage";
import HelpCenter from "../Page/HelpCenter";
import HSC from "../Page/Hsc";
import AllSkills from "../Page/AllSkills";
import FreeCourse from "../Page/FreeCourse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classSix",
        element: <SixMonthPage></SixMonthPage>,
      },
      {
        path: "/classSeven",
        element: <SevenMonthPage></SevenMonthPage>,
      },
      {
        path: "/classEight",
        element: <EightMonthPage></EightMonthPage>,
      },
      {
        path: "/classNine",
        element: <NineMonthPage></NineMonthPage>,
      },
      {
        path: "/classTen",
        element: <TenMonthPage></TenMonthPage>,
      },
      {
        path: "/helpCenter",
        element: <HelpCenter></HelpCenter>,
      },
      {
        path: "/hsc",
        element: <HSC></HSC>,
      },
      {
        path: "/allSkills",
        element: <AllSkills></AllSkills>,
      },
      {
        path: "/freeSkills",
        element: <FreeCourse></FreeCourse>,
      },
    ],
  },
]);
