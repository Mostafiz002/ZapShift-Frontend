import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../components/Logo";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut, setUser } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Logout successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/rider">Be a Rider</NavLink>
      </li>
      <li>
        <NavLink to="/send-parcel">Send Parcel</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard/my-parcels">My Parcels</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-full pr-7 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="">
          <Logo />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <Link onClick={handleLogout} className="btn btn-primary">
            Sign Out
          </Link>
        ) : (
          <>
            <Link to="login" className=" btn btn-outline">
              Login
            </Link>
            <Link to="register" className="btn btn-primary">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
