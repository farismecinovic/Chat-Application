import React from "react";
import "./Dashboard.css";

const Dashboard = ({ children, user, signOut }) => {
  const { photoURL, displayName } = user;

  return (
    <aside>
      <header>
        <div className="profile-info">
          <img src={photoURL} alt="Avatar" />

          <h3>{displayName}</h3>
        </div>
      </header>
      <ul>
        <li>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/2950/2950581.svg?token=exp=1611238070~hmac=1dbb1abe967b3dcaabb54950cd5c5210"
            width="40"
            height="40"
            alt="ChatRoomLogo"
          />
          <div>
            <h2>#ChatRoom 1</h2>
          </div>
        </li>
        <li>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/2950/2950581.svg?token=exp=1611238070~hmac=1dbb1abe967b3dcaabb54950cd5c5210"
            width="40"
            height="40"
            alt="ChatRoomLogo"
          />
          <div>
            <h2>#ChatRoom 2</h2>
          </div>
        </li>
        <li>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/2950/2950581.svg?token=exp=1611238070~hmac=1dbb1abe967b3dcaabb54950cd5c5210"
            width="40"
            height="40"
            alt="ChatRoomLogo"
          />
          <div>
            <h2>#ChatRoom 3</h2>
          </div>
        </li>
        <li>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/2950/2950581.svg?token=exp=1611238070~hmac=1dbb1abe967b3dcaabb54950cd5c5210"
            width="40"
            height="40"
            alt="ChatRoomLogo"
          />
          <div>
            <h2>#ChatRoom 4</h2>
          </div>
        </li>
      </ul>
      <div className="signout" onClick={signOut}>
        <div className="button">
          <h4>Signout</h4>
        </div>
      </div>
    </aside>
  );
};

export default Dashboard;
