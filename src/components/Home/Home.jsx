import React, { useRef, useState } from "react";
import "./home.scss";
import astrolabVideo from "../../assets/video/astrolab.mp4";
import toggle from "../../assets/images/hamburger.svg";
import toggleMiddle from "../../assets/images/toggleMiddile.svg";
import toggle1 from "../../assets/images/toggle1.svg";
import close from "../../assets/images/close.svg";
import vector from "../../assets/images/Vector-scroll.svg";

export const Home = () => {
  const [toggle, setToggle] = useState(true);

  const ischecked = (evt) => {
    if (evt.target.checked === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div className="home_video">
      <video src={astrolabVideo} loop autoPlay muted className="video-bg " />

      <header id="navbar">
        <div className="header">
          <div className="mobile">
            <div className="navbar-container">
              <input
                type="checkbox"
                name
                id="humburger_input"
                defaultChecked={false}
                onClick={(evt) => ischecked(evt)}
              />
              <div className="hamburger-lines">
                <span className="line line1" />
                <span className="line line2" />
                <span className="line line3" />
              </div>
              <ul className="menu-items" hidden={toggle}>
                <li className="link_item" id="projectPage">
                  <a href="#">About us</a>
                </li>
                <li id="aboutPage">
                  <a href="#">Portfolio</a>
                </li>
                <li id="contactPage">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="vector">
          <img src={vector} alt="" />
        </div>
      </header>

      <div></div>
    </div>
  );
};
