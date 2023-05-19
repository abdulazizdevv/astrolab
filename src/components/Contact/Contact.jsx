import React, { useEffect } from "react";
import "./contact.scss";
import iconCall from "../../assets/images/call.svg";
import iconEmail from "../../assets/images/email.svg";
import iconLocation from "../../assets/images/location.svg";
import { Form } from "../Form/Form";
import Carousel from "../Carousel/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="contact_all" id="contact">
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <h2 className="contact_all_h2">Contact</h2>
            <div className="contact_all_info">
              <div className="contact_all_data"           data-aos="zoom-out-up">
                <img src={iconCall} alt="" />
                <a className="tels" href="tel:+998999999999">
                  +998 99 999-99-99
                </a>
              </div>
              <div className="contact_all_data"           data-aos="zoom-out-up">
                <img src={iconEmail} alt="" />
                <p className="tels">info@astrolab.uz</p>
              </div>
              <div className="contact_all_data"           data-aos="zoom-out-up">
                <img src={iconLocation} alt="" />
                <p className="location">
                  10-floor, 49, Islam Karimov str., Tashkent, Uzbekistan
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <Form />
          </div>

          <p className="poweredBy">
            Powered by <a href="#">Astrolab</a>
          </p>
        </div>
      </div>
    </div>
  );
};
