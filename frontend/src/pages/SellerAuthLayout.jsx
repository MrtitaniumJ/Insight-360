import React from "react";
import { Outlet } from "react-router";
import HeaderSeller from "../components/header/HeaderSeller";

function SellerAuthLayout() {
  return (
    <><div  className="h-[10vh]">

     <HeaderSeller/>
    </div>
      <Outlet />
    </>
  );
}

export default SellerAuthLayout;
