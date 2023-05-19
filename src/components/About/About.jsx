import React, { useEffect } from "react";
import "./about.scss";
import globus from "../../assets/images/globus.svg";
import Top from "../../assets/images/top.svg";
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about_bg " id="about">
      <div className="all_hero container">
        <div className="text" data-aos="zoom-in">
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
        <div className="globus " data-aos="zoom-in-up">
          <img className="globus_img" src={globus} alt="" />
          <div className="tops">
            <img src={Top} alt="top" />
          </div>
        </div>
      </div>
    </div>
  );
};
