import React, { useState, useEffect, useContext } from "react";
import { auth } from "../Core/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // function signup(email, password) {
  //   return auth.createUserWithEmailAndPassword(email, password);
  // }

  function logout() {
    return auth.signOut();
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return auth.currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return auth.currentUser.updatePassword(password);
  }

  useEffect(() => {
    let unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    // signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
