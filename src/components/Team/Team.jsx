import React from "react";
import "./team.scss";
import kosmonaft from "../../assets/images/kosmanaft.svg";
export const Team = () => {
  return (
    <div className="all_team">
      <div className="container alls">
        <h2 className="team_h2" >Team</h2>
        <img src={kosmonaft} alt="" />
      </div>
    </div>
  );
};
