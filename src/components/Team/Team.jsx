import React, { useEffect } from "react";
import "./team.scss";
import team from "../../assets/images/team.svg";
import rightVector from "../../assets/images/right.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="all_team">
      <div className="container alls">
        <h2 className="team_h2">Team</h2>
        <div className="team_all row ">
          <div
            data-aos="zoom-in-right"
            className="team_all_card col-xl-3 col-sm-6 col-lg-4  "
          >
            <div className="team">
              <img src={team} alt="" />
              <div className="vector_img">
                <img src={rightVector} alt="person" />
              </div>
            </div>
            <div className="txt">
              <h2 className="Surname">Name Surname</h2>
              <p className="positions">Position</p>
            </div>
          </div>
          <div
            data-aos="zoom-in-right"
            className="team_all_card col-xl-3 col-sm-6 col-lg-4  "
          >
            <div className="team">
              <img src={team} alt="" />
              <div className="vector_img">
                <img src={rightVector} alt="person" />
              </div>
            </div>
            <div className="txt">
              <h2 className="Surname">Name Surname</h2>
              <p className="positions">Position</p>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="team_all_card col-xl-3 col-sm-6 col-lg-4"
          >
            <div className="team">
              <img src={team} alt="" />
              <div className="vector_img">
                <img src={rightVector} alt="person" />
              </div>
            </div>
            <div className="txt">
              <h2 className="Surname">Name Surname</h2>
              <p className="positions">Position</p>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="team_all_card col-xl-3 col-sm-6 col-lg-4"
          >
            <div className="team">
              <img src={team} alt="" />
              <div className="vector_img">
                <img src={rightVector} alt="person" />
              </div>
            </div>
            <div className="txt">
              <h2 className="Surname">Name Surname</h2>
              <p className="positions">Position</p>
            </div>
          </div>
          <div
            data-aos="zoom-in-right"
            className="team_all_card col-xl-3 col-sm-6 col-lg-4  "
          >
            <div className="team">
              <img src={team} alt="" />
              <div className="vector_img">
                <img src={rightVector} alt="person" />
              </div>
            </div>
            <div className="txt">
              <h2 className="Surname">Name Surname</h2>
              <p className="positions">Position</p>
            </div>
          </div>
          <div
            data-aos="zoom-in-right"
            className="team_all_card col-xl-3 col-sm-6 col-lg-4  "
          >
            <div className="team">
              <img src={team} alt="" />
              <div className="vector_img">
                <img src={rightVector} alt="person" />
              </div>
            </div>
            <div className="txt">
              <h2 className="Surname">Name Surname</h2>
              <p className="positions">Position</p>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="team_all_card col-xl-3 col-sm-6 col-lg-4"
          >
            <div className="team">
              <img src={team} alt="" />
              <div className="vector_img">
                <img src={rightVector} alt="person" />
              </div>
            </div>
            <div className="txt">
              <h2 className="Surname">Name Surname</h2>
              <p className="positions">Position</p>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="team_all_card col-xl-3 col-sm-6 col-lg-4"
          >
            <div className="team">
              <img src={team} alt="" />
              <div className="vector_img">
                <img src={rightVector} alt="person" />
              </div>
            </div>
            <div className="txt">
              <h2 className="Surname">Name Surname</h2>
              <p className="positions">Position</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
