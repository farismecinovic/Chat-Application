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
            src="https://firebasestorage.googleapis.com/v0/b/react-chat-73602.appspot.com/o/chat.png?alt=media&token=1ce2d492-5c6a-491e-bc03-1faf3a60c04b"
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
            src="https://firebasestorage.googleapis.com/v0/b/react-chat-73602.appspot.com/o/chat.png?alt=media&token=1ce2d492-5c6a-491e-bc03-1faf3a60c04b"
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
            src="https://firebasestorage.googleapis.com/v0/b/react-chat-73602.appspot.com/o/chat.png?alt=media&token=1ce2d492-5c6a-491e-bc03-1faf3a60c04b"
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
            src="https://firebasestorage.googleapis.com/v0/b/react-chat-73602.appspot.com/o/chat.png?alt=media&token=1ce2d492-5c6a-491e-bc03-1faf3a60c04b"
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
