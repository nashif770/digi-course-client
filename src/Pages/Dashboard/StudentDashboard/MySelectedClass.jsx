import React, { useEffect, useState, useContext } from "react";
import Headings from "../../../Componants/Headings";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MySelectedClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("allselectedclasses")
      .then((response) => {
        setSelectedClasses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedClasses]);

  const mySelectedClass = selectedClasses.filter(
    (enrolled) => enrolled.email === user.email
  );

  let index = 1;

  const handleEnroll = (group) => {
    console.log("groups", group);
    const classInfo = {
      email: user?.email,
      status: "enrolled",
    };

    const myEnrolledClass = { ...group, ...classInfo };

    console.log("enrolled", myEnrolledClass);

    axiosSecure.post("enrolledClass", myEnrolledClass).then((res) => {
      console.log("axios stuff",res.data);
      if (res.data.insertedId) {
        console.log("data entered");
      }
    });

    fetch(`http://localhost:5000/myselectedclasses/${myEnrolledClass._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };

  const handleDelete = (group) => {
    console.log("selected class deleted from delete",group._id)

    fetch(`http://localhost:5000/myselectedclasses/${group._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
        }
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
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {mySelectedClass?.map((group) => (
              <tr key={group._id} className="">
                <th>{index++}</th>
                <td>
                  <img src={group.thumbnail} alt="" className="h-[100px]" />
                </td>
                <td>{group.name}</td>
                <td>{group.instructor}</td>
                <td>10/12/2022</td>
                <td className="h-[123px] flex flex-row justify-center align-middle items-center">
                  <button
                    onClick={() => handleEnroll(group)}
                    className="btn btn-primary m-auto"
                  >
                    Enroll
                  </button>
                  <button
                    onClick={() => handleDelete(group)}
                    className="btn bg-red-600 text-white m-auto"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySelectedClass;
