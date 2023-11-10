import React from "react";
import Headings from "../../../Componants/Headings";
import background1 from "../../../assets/bg1.jpg";
import background2 from "../../../assets/bg2.jpg";
import background3 from "../../../assets/bg3.jpg";
import background4 from "../../../assets/bg4.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col m-3 p-3">
      <Headings
        heading={"Elevate Your Skills, Embrace the Coders Spirit"}
        subHeading={"Join Digi-Course"}
      ></Headings>
      <div className="carousel w-10/12 m-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={background1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={background2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={background3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={background4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="m-3 w-full text-center">
        <h1 className="text-5xl"></h1>
        <p className="mt-3 text-xl w-2/3 m-auto">
          Ready to level up your coding skills? Join our Coding Summer School
          for an unforgettable experience of learning, creativity, and tech
          adventure!
        </p>
      </div>
    </div>
  );
};

export default Banner;
