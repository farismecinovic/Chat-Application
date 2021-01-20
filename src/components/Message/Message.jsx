import React from "react";
import { formatRelative } from "date-fns";
import "./Message.css";

const Message = ({
  createdAt = null,
  photoURL = "",
  text = "",
  displayName = "",
  user = null,
}) => {
  return (
    <div>
      {displayName !== user ? (
        <li className="you">
          <div className="entete">
            <span className="status green" />
            <h2>{displayName}</h2>
            <h3>
              {createdAt &&
                formatRelative(new Date(createdAt.seconds * 1000), new Date())}
            </h3>
          </div>

          <div className="message">{text}</div>
        </li>
      ) : (
        <li className="me">
          <div className="entete">
            <h3>
              {createdAt &&
                formatRelative(new Date(createdAt.seconds * 1000), new Date())}
            </h3>
            <h2>{displayName}</h2>
            <span className="status blue" />
          </div>
          <div className="message">{text}</div>
        </li>
      )}
    </div>
    // <div>
    //   <div class="container">
    //     {photoURL && <img src={photoURL} alt="Avatar" />}
    //     {displayName && <h4>{displayName}</h4>}
    //     {text && <p>{text}</p>}
    //     {createdAt && (
    //       <span class="time-right">
    //         {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
    //       </span>
    //     )}
    //   </div>
    // </div>
  );
};
export default Message;
