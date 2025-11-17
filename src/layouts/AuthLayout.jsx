import React from "react";
import { Outlet } from "react-router";
import Logo from "../components/Logo";
import authImg from "../assets/others/authImage.png";

const AuthLayout = () => {
  return (
    <div className=" max-w-[1332px] px-4 mx-auto">
      <div>
        <Logo />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-1">
        <Outlet />
      </div>
      <div className="flex-1">
        <img src={authImg} alt="" />
      </div>
      </div>
    </div>
  );
};

export default AuthLayout;
