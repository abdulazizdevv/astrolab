import React, { useEffect } from "react";
import "./form.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export const Form = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="all_form">
      <h2 className="all_form_h2">Form</h2>
      <form action="">
        <input
          placeholder="Full Name"
          className=" "
          type="text"
          name="fullname"
          id=""
          data-aos="zoom-out-up"
        />
        <input
          placeholder="Phone number"
          className=" "
          type="tel"
          name="Phone number"
          id=""
          data-aos="zoom-out-up"
        />

        <input
          placeholder="Email"
          className=" "
          type="email"
          name="Email"
          id=""
          data-aos="zoom-out-up"
        />
        <textarea placeholder="Your text" data-aos="zoom-out-up" name="text" id=""></textarea>

        <button className="btn_send">Send</button>
      </form>
    </div>
  );
};
