import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header"
function AuthLayout() {
  return (
    <><div  className="h-[10vh]">

     <Header/>
    </div>
      <Outlet />
    </>
  );
}

export default AuthLayout;
