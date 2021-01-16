import React, { useState, useEffect } from "react";
import "./Chatbox.css";
import firebase from "firebase/app";
import Message from "../Message/Message";

const Chatbox = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { uid, photoURL, displayName } = user;

  useEffect(() => {
    if (db) {
      const unsubsrcibe = db
        .collection("messages")
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMessages(data);
          console.log(data);
        });

      //detach listener
      return unsubsrcibe;
    }
  }, [db]);

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (db) {
      db.collection("messages").add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
    }
    setNewMessage("");
  };

  return (
    <div className="chatbox">
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <Message {...message} />
          </li>
        ))}
      </ul>

      <div className="chat-form">
        <form id="chat-form" onSubmit={handleOnSubmit}>
          <input
            id="text-message"
            type="text"
            value={newMessage}
            onChange={handleOnChange}
            placeholder="Type your message here ..."
          />
          <button type="submit" disabled={!newMessage}>
            <svg
              className="send-icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="paper-plane"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbox;
