import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
