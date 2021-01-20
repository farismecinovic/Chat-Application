import React from "react";
import "./Dashboard.css";

const Dashboard = ({ children, user, signOut }) => {
  const { photoURL, displayName } = user;

  return (
    // <div className="dashboard">
    //   <div className="user">
    //     <img src={photoURL} alt="Avatar" />
    //     <h3>{displayName}</h3>
    //   </div>
    //   <div className="links">
    //     <div className="channel">
    //       <h2>Channel 1 </h2>
    //     </div>
    //     <div className="channel">
    //       <h2>Channel 2</h2>
    //     </div>
    //     <div className="channel">
    //       <h2>Channel 3</h2>
    //     </div>
    //     <div className="channel">
    //       <h2>Soon channels</h2>
    //     </div>
    //   </div>
    //   <div className="signout" onClick={signOut}>
    //     <h2>Sign out</h2>
    //   </div>
    // </div>
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
            src="https://img.icons8.com/ios/452/filled-chat.png"
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
            src="https://img.icons8.com/ios/452/filled-chat.png"
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
            src="https://img.icons8.com/ios/452/filled-chat.png"
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
            src="https://img.icons8.com/ios/452/filled-chat.png"
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
