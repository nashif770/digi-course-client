import React from "react";

const Headings = ({ heading, subHeading }) => {
  return (
    <div className="bg-gray-100 mb-3">
      <div className="flex flex-col justify-center items-center py-6">
          <h1 className=" text-center text-3xl font-bold mb-2">{heading}</h1>
          <p className=" text-center text-lg text-gray-600">{subHeading}</p>
      </div>
    </div>
  );
};

export default Headings;
