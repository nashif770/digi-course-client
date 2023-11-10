import React, { useContext } from "react";
import Headings from "../../../Componants/Headings";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  
  return (
    <div>
      <Headings heading={"User Profile"}></Headings>
      <div className="ms-3 flex flex-row">
        <img className="w-1/3" src={user.photoURL} alt="" />
        <div className="text-start">
          <h2 className="text-2xl m-3 font-bold">User Name:</h2>
          <h2 className="text-2xl m-3">{user.displayName}</h2>
          <h2 className="text-2xl m-3 font-bold">User Email:</h2>
          <h2 className="text-2xl m-3">{user.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
