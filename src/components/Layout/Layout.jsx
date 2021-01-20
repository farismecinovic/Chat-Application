import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div id="container">{children}</div>
    </>
  );
};

export default Layout;
