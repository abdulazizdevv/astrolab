import React from "react";
import { Header } from "../Header/Header";
import { Contact } from "../Contact/Contact";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Contact />
    </>
  );
};
