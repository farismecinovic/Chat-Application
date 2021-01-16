import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <section class="glass">{children}</section>
      </main>
      <div class="circle1"></div>
      <div class="circle2"></div>
    </>
  );
};

export default Layout;
