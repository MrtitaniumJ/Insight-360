import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { Typewriter } from 'react-simple-typewriter'

function SellerDashboardLayout() {
  return (
    <div className="h-[100vh]">
      {/* <Header className="h-[10vh]" /> */}
      <div className="text-white bg-gray-700 font-bold text-2xl p-4">
      <Typewriter
            words={["Khudka"]}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={2000}
          
          />
      </div>
      <div className="flex">
        <Sidebar className="h-[0vh]" />
        <Outlet className="" />
      </div>
    </div>
  );
}

export default SellerDashboardLayout;
