import React, { useEffect, useState } from "react";
import Headings from "../../../Componants/Headings";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const OurStats = () => {
  const [axiosSecure] = useAxiosSecure();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axiosSecure.get("classes").then((res) => setClasses(res.data));
  }, []);

  const instructorIds = classes.map((cls) => cls.instructor);

  console.log(instructorIds?.length);

  return (
    <div className="flex flex-col justify-center text-center">
      <Headings heading={"Our Statistics"}></Headings>
      <div className="stats shadow w-1/2 m-auto bg-slate-100 my-3">
        <div className="stat">
          <div className="stat-figure text-primary">{/* TODO: icon */}</div>
          <div className="stat-title">Total Classes</div>
          <div className="stat-value text-primary">{classes.length}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">{/* TODO: icon */}</div>
          <div className="stat-title">All Instructor</div>
          <div className="stat-value text-secondary">
            {instructorIds?.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStats;
