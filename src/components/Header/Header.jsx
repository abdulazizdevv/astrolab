import React, { useRef, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import "./header.scss";

export const Header = () => {
  const [top, setTop] = useState("none");
  const topRef = useRef();
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (document.documentElement.scrollTop > 800) {
      setTop("block");
      // topRef.style.opacity="1"
    } else {
      setTop("none");
      // topRef.style.opacity="0"

    }
  }
  return (
    <div ref={topRef} className="tops_nav" style={{display:top}}>
      <div className="container">
        <div className="nav">
          <img src={Logo} alt="" />
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#">HOME</a>
            </li>
            <li className="nav_item">
              <a href="#">ABOUT US</a>
            </li>
            <li className="nav_item">
              <a href="#">PORTFOLIO</a>
            </li>
            <li className="nav_item">
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
