import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Retreat from "./pages/Retreat";
import Horses from "./pages/Horses";
import Entertainment from "./pages/Entertainment";
import Directions from "./pages/Directions";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "retreat", Component: Retreat },
      { path: "horses", Component: Horses },
      { path: "entertainment", Component: Entertainment },
      { path: "directions", Component: Directions },
    ],
  },
]);
