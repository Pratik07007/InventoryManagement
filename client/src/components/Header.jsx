import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#4796BD] h-[10vh] flex items-center justify-between px-20">
      <Link to="/">
        <div className=" bg-white px-8 py-4 rounded-2xl text-xl hover:bg-gray-300 cursor-pointer">
          Upaya
        </div>
      </Link>

      <div className="flex gap-5">
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "bg-blue-300 px-8 py-4 rounded-2xl text-xl hover:bg-blue-300"
              : "bg-white px-8 py-4 rounded-2xl text-xl hover:bg-blue-300";
          }}
          to={"/auth/login"}
        >
          Login
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "bg-blue-300 px-8 py-4 rounded-2xl text-xl hover:bg-blue-300"
              : "bg-white px-8 py-4 rounded-2xl text-xl hover:bg-blue-300";
          }}
          to={"/auth/signup"}
        >
          SignUp
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
