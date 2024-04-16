import React, { useState } from "react";
import { FaTh, FaBars,FaSitemap } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TbCategoryFilled } from "react-icons/tb";
import { ImCart } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi2";
import { GiMoneyStack } from "react-icons/gi";
import { BsCalendar2MonthFill } from "react-icons/bs";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    { path: "/dashboard", name: "Dashboard", icon: <MdSpaceDashboard /> },
    { path: "/products", name: "Products", icon: <FaSitemap /> },
    { path: "/categories", name: "Categories", icon: <TbCategoryFilled /> },
    { path: "/orders", name: "Orders", icon:<ImCart /> },
    { path: "/customers", name: "Customers", icon: <HiUserGroup /> },
    { path: "/earning", name: "Earning", icon: <GiMoneyStack /> },
    { path: "/weekly-overview", name: "Weekly Overview", icon: <HiUserGroup /> },
    { path: "/monthly-overview", name: "Monthly Overview", icon: <BsCalendar2MonthFill /> },
  ];

  return (

    <div className="flex h-[90vh]">
      <div
        className={`sidebar flex flex-col text-white bg-gray-700 ${
          isOpen ? "w-48" : "w-16"
        } mt-2 ml-2 mb-2 rounded text-4xl transition-all ease-in-out`}
      >
        <div className={`bars pt-4 text-center text-2xl pb-2 px-3 ${
              isOpen ? "text-start" : "text-center"
            }`}>
          <button onClick={toggle} >{isOpen?<IoIosClose /> :<MdOutlineMenu />
}</button>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={`link flex p-2.5 hover:bg-gray-800 focus:bg-gray-900 items-center rounded ${
              isOpen ? "justify-start" : "justify-center py-3.5"
            } px-4`}
            // activeClassName="active"
          >
            <div className="icon text-base ">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text pl-2 text-base font-semibold"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <div
        className={`main-content ${
          isOpen ? "ml-2" : "ml-1/2"
        } transition-all ease-in-out flex-grow `}
      >
        {children}
     
    </div>
    </div>
  );
};

export default Sidebar;