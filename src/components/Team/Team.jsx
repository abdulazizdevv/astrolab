import React from "react";
import "./team.scss";
import team from "../../assets/images/team.svg";
import rightVector from "../../assets/images/right.svg";
export const Team = () => {
  return (
    <div className="all_team">
      <div className="container alls">
        <h2 className="team_h2">Team</h2>
        <div className="team_all row">
          <div className="team_all_card col-xl-3 col-sm-6 col-lg-4">
            <img className="team" src={team} alt="" />
            <div className="vector_img">
              <img src={rightVector} alt="person" />
            </div>
            <h2 className="Surname">Name Surname</h2>
            <p className="positions">Position</p>
          </div>
          <div className="team_all_card col-xl-3 col-sm-6 col-lg-4">
            <img className="team" src={team} alt="" />
            <div className="vector_img">
              <img src={rightVector} alt="person" />
            </div>
            <h2 className="Surname">Name Surname</h2>
            <p className="positions">Position</p>
          </div>
          <div className="team_all_card col-xl-3 col-sm-6 col-lg-4">
            <img className="team" src={team} alt="" />
            <div className="vector_img">
              <img src={rightVector} alt="person" />
            </div>
            <h2 className="Surname">Name Surname</h2>
            <p className="positions">Position</p>
          </div>
          <div className="team_all_card col-xl-3 col-sm-6 col-lg-4">
            <img className="team" src={team} alt="" />
            <div className="vector_img">
              <img src={rightVector} alt="person" />
            </div>
            <h2 className="Surname">Name Surname</h2>
            <p className="positions">Position</p>
          </div>
          <div className="team_all_card col-xl-3 col-sm-6 col-lg-4">
            <img className="team" src={team} alt="" />
            <div className="vector_img">
              <img src={rightVector} alt="person" />
            </div>
            <h2 className="Surname">Name Surname</h2>
            <p className="positions">Position</p>
          </div>
          <div className="team_all_card col-xl-3 col-sm-6 col-lg-4">
            <img className="team" src={team} alt="" />
            <div className="vector_img">
              <img src={rightVector} alt="person" />
            </div>
            <h2 className="Surname">Name Surname</h2>
            <p className="positions">Position</p>
          </div>
          <div className="team_all_card col-xl-3 col-sm-6 col-lg-4">
            <img className="team" src={team} alt="" />
            <div className="vector_img">
              <img src={rightVector} alt="person" />
            </div>
            <h2 className="Surname">Name Surname</h2>
            <p className="positions">Position</p>
          </div>
          <div className="team_all_card col-xl-3 col-sm-6 col-lg-4">
            <img className="team" src={team} alt="" />
            <div className="vector_img">
              <img src={rightVector} alt="person" />
            </div>
            <h2 className="Surname">Name Surname</h2>
            <p className="positions">Position</p>
          </div>
        </div>
      </div>
    </div>
  );
};
