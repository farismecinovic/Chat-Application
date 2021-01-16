import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import Message from "./Message";

const Channel = ({ user = null, db = null }) => {
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
  };
  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <Message {...message} />
          </li>
        ))}
      </ul>
      <form onSubmit={handleOnSubmit}>
        {/*<input*/}
        {/*  type="text"*/}
        {/*  value={newMessage}*/}
        {/*  onChange={handleOnChange}*/}
        {/*  placeholder="Your message.."*/}
        {/*/>*/}
        {/*<button type="submit" disabled={!newMessage}>*/}
        {/*  Send*/}
        {/*</button>*/}
      </form>
    </div>
  );
};
export default Channel;
