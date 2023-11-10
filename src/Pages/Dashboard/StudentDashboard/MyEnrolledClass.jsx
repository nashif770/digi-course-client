import React, { useState, useEffect, useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Headings from "../../../Componants/Headings";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyEnrolledClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const { user } = useContext(AuthContext);
  // TODO: send email to backend
  useEffect(() => {
    axiosSecure
      .get("enrolledClass")
      .then((response) => {
        setEnrolledClasses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [enrolledClasses]);

  const myEnrolledClass = enrolledClasses.filter(
    (enrolled) => enrolled.email === user.email
  );

  let index = 1;

  const handleStatus = (group) => {
    const { email, _id } = group;
    console.log("course id",_id)
    fetch(`http://localhost:5000/enrolledClass/${email}/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <Headings heading={"My Classes"} subHeading={""}></Headings>
      <div className="overflow-x-auto">
        <div className="flex align-middle justify-between m-3 mt-0 px-60 py-3 bg-slate-300"></div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Due Date</th>
              <th>Progress</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myEnrolledClass?.map((group) => (
              <tr key={group._id} className="">
                <th>{index++}</th>
                <td>
                  <img src={group.thumbnail} alt="" className="h-[100px]" />
                </td>
                <td>{group.name}</td>
                <td>{group.instructor}</td>
                <td>{group.instructor}</td>
                <td>80%</td>
                <td className="h-[123px] flex flex-row justify-center align-middle items-center">
                  {group.status == "Complete" ? (
                    <button className="btn bg-slate-300 text-white m-auto">
                      Complete
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatus(group)}
                      className="btn bg-green-600 text-white m-auto"
                    >
                      Mark as Complete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyEnrolledClass;
