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
    window.location.hash = "";
    document.documentElement.scrollTop = 0;
  };
  const homeRef = useRef();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  // const handleClick1 = (evt) => {
  //   if (evt.target.className == "res") {
  //     aboutRef.current.classList.remove("res");
  //   }else{
  //     aboutRef.current.classList.add("res");
  //   }
  // };
  // const handleClick2 = () => {
  //   portfolioRef.current.classList.add("res");
  // };
  // const handleClick3 = () => {
  //   contactRef.current.classList.add("res");
  // };

  return (
    <div className="tops_nav" hidden={top}>
      <div className="container">
        <div className="nav">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <ul className="nav_list">
            <li className="nav_item">
              <a onClick={topY} className="isActive1">
                HOME
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                ref={aboutRef}
                className=""
                onClick={(evt) => handleClick1(evt)}
              >
                ABOUT US
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#portfolio"
                ref={portfolioRef}
                className="isActive"
                // onClick={handleClick2}
              >
                PORTFOLIO
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contact"
                ref={contactRef}
                className="isActive"
                // onClick={handleClick3}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
