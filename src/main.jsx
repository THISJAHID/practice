import * as React from "react";


import "./index.css";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "./Pages/MainLayout/Mainlayout.jsx";
import Erorr from "./Pages/Erorr/Erorr.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivetsRoutes from "./Routers/PrivetsRoutes";
import PostCart from "./Pages/PostCart/PostCart";
import PostDetails from "./Pages/PostCart/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Erorr></Erorr>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <PrivetsRoutes><About></About></PrivetsRoutes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/postCart/:category",
        loader: () => fetch("../event.json"),
        element: <PrivetsRoutes><PostCart></PostCart></PrivetsRoutes>
      },
      {
        path: "/postData/:num",
        loader:() => fetch('../event.json'),
        element:<PrivetsRoutes><PostDetails></PostDetails></PrivetsRoutes>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </React.StrictMode>
);
