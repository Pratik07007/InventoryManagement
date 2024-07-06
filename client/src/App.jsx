import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Employee from "./pages/Employee";
import LayoutLoginSignUp from "./components/LayoutLoginSignUp";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/employee",
          element: <Employee />,
        },
      ],
    },
    {
      path: "/auth",
      element: <LayoutLoginSignUp />,
      children:[{
        path:"login",
        element: <Login/>
      },{
        path:"signup",
        element: <SignUp/>
      }]
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
