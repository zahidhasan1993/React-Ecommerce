import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);

export const UserData = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   console.log(currentUser);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const googleProvider = new GoogleAuthProvider();

  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const components = {
    signInGoogle,
    signUpWithEmail,
    signInWithEmail,
    logOut,
    user,
  };
  return <UserData.Provider value={components}>{children}</UserData.Provider>;
};

export default AuthProvider;
