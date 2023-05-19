import React, { useRef, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import "./header.scss";

export const Header = () => {
  const [top, setTop] = useState(true);
  const topRef = useRef();
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (document.documentElement.scrollTop > 15) {
      setTop(false);
      document.getElementById("mouse-toggle").style.display = "none";
      document.getElementById("navbar").style.display = "none";
    } else {
      setTop(true);
      document.getElementById("mouse-toggle").style.display = "flex";
      document.getElementById("navbar").style.display = "block";
    }
  }

  const topY = () => {
    window.location.hash = ""
    document.documentElement.scrollTop = 0
  };

  return (
    <div className="tops_nav" hidden={top}>
      <div className="container">
        <div className="nav">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <ul className="nav_list">
            <li className="nav_item">
              <a   onClick={topY} className="isActive">HOME</a>
            </li>
            <li className="nav_item">
              <a href="#about" className="isActive">ABOUT US</a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className="isActive">PORTFOLIO</a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="isActive">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
