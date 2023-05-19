import React from "react";
import "./form.scss";

export const Form = () => {
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
        />
        <input
          placeholder="Phone number"
          className=" "
          type="tel"
          name="Phone number"
          id=""
        />

        <input
          placeholder="Email"
          className=" "
          type="email"
          name="Email"
          id=""
        />
        <textarea
          placeholder="Your text"
          name="text"
          id=""
        ></textarea>

        <button className="btn_send">
            Send
        </button>
      </form>
    </div>
  );
};
