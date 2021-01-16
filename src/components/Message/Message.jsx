import React from "react";
import { formatRelative } from "date-fns";
import "./Message.css";

const Message = ({
  createdAt = null,
  photoURL = "",
  text = "",
  displayName = "",
}) => {
  return (
    <div>
      <div class="container">
        {photoURL && <img src={photoURL} alt="Avatar" />}
        {displayName && <h4>{displayName}</h4>}
        {text && <p>{text}</p>}
        {createdAt && (
          <span class="time-right">
            {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
          </span>
        )}
      </div>
    </div>
  );
};
export default Message;
