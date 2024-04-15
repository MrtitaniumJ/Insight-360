import React from "react";
import { Outlet } from "react-router";

function MasterAuthLayout() {
  return (
    <><div  className="h-[10vh]">

     header aaiga
    </div>
      <Outlet />
    </>
  );
}

export default MasterAuthLayout;
