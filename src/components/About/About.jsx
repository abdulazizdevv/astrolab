import React from "react";
import "./about.scss";
import Top from "../../assets/images/top.svg";

export const About = () => {
  return (
    <div className="about_bg ">
      <div className="all_hero container">
        <div className="text">
          <h1 className="text_h1">About us</h1>
          <p className="text_p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard...
            <span className="all_txt">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </span>
          </p>
        </div>
        <div className="globus">
          <div className="tops">
            <img src={Top} alt="top" />
          </div>
        </div>
      </div>
    </div>
  );
};
