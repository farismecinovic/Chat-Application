import React, { useState, useEffect } from "react";
//COMPONENTS
//FIREBASE
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Chatbox from "./components/Chatbox/Chatbox";

firebase.initializeApp({
  apiKey: "AIzaSyCSMyQNlZ9wdQTSmnanp0aMUejKfsGqVTo",
  authDomain: "react-chat-73602.firebaseapp.com",
  projectId: "react-chat-73602",
  storageBucket: "react-chat-73602.appspot.com",
  messagingSenderId: "165502431808",
  appId: "1:165502431808:web:5fd245108a88157cafe5a5",
  measurementId: "G-MNPSWM6WWT",
});

const auth = firebase.auth();
const db = firebase.firestore();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(() => auth.currentUser);

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    // Cleanup subscription
    return unsubscribe;
  }, [initializing]);

  if (initializing) return "Loading...";
  return (
    <div>
      {user ? (
        <>
          <Layout >

            <Dashboard user={user} signOut={signOut}/>
            <Chatbox user={user} db={db}/>
</Layout>
        </>
      ) : (
        <Layout>
  <div className="signin" onClick={signInWithGoogle}>
        <h2>Sign in</h2>
      </div>
        </Layout>
      )}
    </div>
  );
}

export default App;
