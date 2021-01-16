import React from "react";
import "./Dashboard.css";

const Dashboard = ({ children, user, signOut }) => {
  const { photoURL, displayName } = user;

  return (
    <div className="dashboard">
      <div className="user">
        <img src={photoURL} alt="Avatar" />
        <h3>{displayName}</h3>
      </div>
      <div className="links">
        <div className="channel">
          <h2>Channel 1 </h2>
        </div>
        <div className="channel">
          <h2>Channel 2</h2>
        </div>
        <div className="channel">
          <h2>Channel 3</h2>
        </div>
        <div className="channel">
          <h2>Soon channels</h2>
        </div>
      </div>
      <div className="signout" onClick={signOut}>
        <h2>Sign out</h2>
      </div>
    </div>
  );
};

export default Dashboard;
