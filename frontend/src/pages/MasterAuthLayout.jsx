import React from "react";
import { Outlet } from "react-router";
import HeaderMaster from "../components/header/HeaderMaster";

function MasterAuthLayout() {
  return (
    <><div  className="h-[10vh]">

    <HeaderMaster/>
    </div>
      <Outlet />
    </>
  );
}

export default MasterAuthLayout;
