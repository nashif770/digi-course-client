import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const DashboardPanel = () => {

  return (
    <div className="drawer lg:drawer-open my-3">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <h1 className="text-center text-3xl">User Panel</h1>
          <div className="divider"></div>
          <li className="m-3">
            <NavLink
              to={"/dashboard/userprofile"}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                  isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                }`
              }
            >
              User Profile
            </NavLink>
          </li>
          <li className="m-3">
            <NavLink
              to={"/dashboard/selectedclass"}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                  isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                }`
              }
            >
              Selected Classes
            </NavLink>
          </li>
          <li className="m-3">
            <NavLink
              to={"/dashboard/enroll"}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                  isActive ? "bg-[# 6b7cff] text-white" : "text-gray-600"
                }`
              }
            >
              Enrolled Class
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPanel;
