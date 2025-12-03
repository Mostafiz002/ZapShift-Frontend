import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdWorkHistory } from "react-icons/md";
import { FaAddressBook, FaMotorcycle, FaTruck, FaUsers } from "react-icons/fa";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { role } = useRole();
  console.log('from dashboard',role)

  return (
    <div className="drawer lg:drawer-open bg-base-200 min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col">
        {/* NAVBAR */}
        <nav className="navbar bg-white shadow-sm px-4">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-ghost btn-square lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              className="size-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <h1 className="text-lg font-semibold">Zap Shift Dashboard</h1>
        </nav>

        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-64 bg-[#1d2939] text-white min-h-full flex flex-col">
          <div className="p-4 font-bold text-xl border-b border-gray-700">
            Menu
          </div>

          <ul className="menu text-white p-4 font-medium">
            {/* HOME */}
            <li>
              <NavLink to="/" className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  className="size-5"
                >
                  <path d="M3 10l9-7l9 7v10a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z" />
                </svg>
                Homepage
              </NavLink>
            </li>

            {/* MY PARCELS */}
            <li>
              <NavLink
                to="/dashboard/my-parcels"
                className="flex items-center gap-3"
              >
                <FaTruck className="size-5" />
                My Parcels
              </NavLink>
            </li>

            {/* payment history */}
            <li>
              <NavLink
                to="/dashboard/payment-history"
                className="flex items-center gap-3"
              >
                <MdWorkHistory className="size-5" />
                Payment History
              </NavLink>
            </li>
            {role === "admin" && (
              <>
                {" "}
                {/* approve riders */}
                <li>
                  <NavLink
                    to="/dashboard/approve-riders"
                    className="flex items-center gap-3"
                  >
                    <FaMotorcycle className="size-5" />
                    Approve Riders
                  </NavLink>
                </li>
                {/* user management */}
                <li>
                  <NavLink
                    to="/dashboard/users-management"
                    className="flex items-center gap-3"
                  >
                    <FaUsers className="size-5" />
                    Users Management
                  </NavLink>
                </li>
                {/* assign riders */}
                <li>
                  <NavLink
                    to="/dashboard/assign-riders"
                    className="flex items-center gap-3"
                  >
                    <FaAddressBook className="size-5" />
                    Assign Riders
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
