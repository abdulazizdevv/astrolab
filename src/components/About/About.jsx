import React from "react";
import "./about.scss";
import globus from "../../assets/images/globus.svg";
import Top from "../../assets/images/top.svg";

export const About = () => {
  return (
    <div className="about_bg " id="about">
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
          <img className="globus_img" src={globus} alt="" />
          <div className="tops">
            <img src={Top} alt="top" />
          </div>
        </div>
      </div>
    </div>
  );
};
