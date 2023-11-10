import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useStudentClass from "../../Hooks/useStudentClass";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const navlist = (
  <>
    <li>
      <Link to={"/"}>Home</Link>
    </li>
    <li>
      <Link to={"/classes"}>Classes</Link>
    </li>
    <li>
      <Link to={"/dashboard/userprofile"}>Dashboard</Link>
    </li>
  </>
);

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/users").then((res) => setAllUsers(res.data));
  }, [allUsers]);

  const currentUser = allUsers.find(
    (thisUser) => thisUser.email === user?.email
  );

  const [myClasses] = useStudentClass();

  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100 border rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlist}
          </ul>
        </div>
        <div className="flex flex-row align-middle">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Digi Course
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlist}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link to={"/dashboard/selectedclass"} className="btn mx-6">
              Classes: {myClasses?.length}
            </Link>
            <img
              src={user?.photoURL}
              alt=""
              className="w-10 mx-6 rounded-full"
            />
            <Link onClick={handleLogOut} className="btn">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"} className="btn mx-6">
              Login
            </Link>
            <Link to={"/register"} className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
