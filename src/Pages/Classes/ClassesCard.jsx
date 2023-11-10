import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ClassesCard = ({ allClass }) => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [selectedClasses, setSelectedClasses] = useState([]);


  useEffect(() => {
    axiosSecure
      .get(`allselectedclasses`)
      .then((response) => {
        setSelectedClasses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedClasses]);

  const isSelected = selectedClasses?.filter(
    (selectedClass) => selectedClass._id === allClass._id
  );

  const handleAddClass = (allClass) => {
    const email = user.email;
    const mySelectedClass = { ...allClass, email };
    if (!user) {
      alert("Please Login");
      return;
    }
    fetch("http://localhost:5000/myselectedclasses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mySelectedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  };

  return (
    <>
      <div className="hero w-10/12 bg-base-200 m-3 rounded-lg text-black">
        <div className="hero-content flex-col w-full rounded">
          <img
            src={allClass.thumbnail}
            className="grid grid-cols-1 md:grid-cols-3 gap-1 m-auto p-6 h-72"
          />
          <div className="w-full">
            <h1 className="text-2xl font-bold text-center"> {allClass.name}</h1>
            <p className="py-6 font-bold">
              Instructor:
              <span className="font-normal h-6 w-20">
                {" "}
                {allClass.instructor}
              </span>
            </p>
            <div className="flex flex-col justify-between">
              <p className="font-bold">
                Enrollment Status:
                <span className=" font-normal ">
                  {" "}
                  {allClass.enrollmentStatus}
                </span>
              </p>
              <p className="font-bold">
                Location:{" "}
                <span className="font-normal"> {allClass.location}</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {isSelected[0]?._id == allClass?._id ? (
              <button className="btn bg-slate-300 text-white">Selected</button>
            ) : (
              <button
                onClick={() => handleAddClass(allClass)}
                className="btn btn-primary text-white"
              >
                Add to My Class
              </button>
            )}
            <Link to={`/detailedClass/${allClass?._id}`}>
              <button className="btn btn-secondary text-white w-full">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesCard;
