import React from "react";
import { useLoaderData } from "react-router-dom";

const ClassDetail = () => {
  const classId = useLoaderData();

  const classDetail = classId[0];

  return (
    <div className="flex flex-row w-full m-auto p-3">
      <div className="w-1/3 p-3 ">
        <img
          className="m-3 w-full h-screen max-h-[720px] rounded-lg shadow-2xl mt-3"
          src={classDetail?.thumbnail}
          alt=""
        />
      </div>
      <div className="m-3 w-2/3 p-3">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr>
                <td className="font-bold w-2/6">Course name: </td>
                <td>{classDetail?.name}</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td className="font-bold">Instructor's name: </td>
                <td>{classDetail?.instructor}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td className="font-bold">Description: </td>
                <td>{classDetail?.description}</td>
              </tr>
              {/* row 4 */}
              <tr>
                <td className="font-bold">Enrollment status: </td>
                <td>{classDetail?.enrollmentStatus}</td>
              </tr>
              {/* row 5 */}
              <tr>
                <td className="font-bold">Course duration: </td>
                <td>{classDetail?.duration}</td>
              </tr>
              {/* row 6 */}
              <tr>
                <td className="font-bold">Schedule: </td>
                <td>{classDetail?.schedule}</td>
              </tr>
              {/* row 7 */}
              <tr>
                <td className="font-bold">Location: </td>
                <td>{classDetail?.location}</td>
              </tr>
              {/* row 8 */}
              <tr>
                <td className="font-bold">Pre-requisites: </td>
                <td>{classDetail?.price}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-5">
            <h2 className="text-2xl font-bold text-center m-3">Syllabus</h2>
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td className="font-bold w-1/6">
                    Week: {classDetail.syllabus[0]?.week}{" "}
                  </td>
                  <td>{classDetail?.syllabus[0].topic}</td>
                  <td>{classDetail?.syllabus[0].content}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="font-bold w-1/6">
                    Week: {classDetail.syllabus[1]?.week}{" "}
                  </td>
                  <td>{classDetail?.syllabus[1].topic}</td>
                  <td>{classDetail?.syllabus[1].content}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
