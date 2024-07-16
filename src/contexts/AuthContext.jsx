/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          throw new Error("The email address is already in use by another account.");
        case "auth/invalid-email":
          throw new Error("The email address is not valid.");
        case "auth/operation-not-allowed":
          throw new Error("Operation not allowed. Please contact support.");
        case "auth/weak-password":
          throw new Error("The password is too weak.");
        default:
          throw new Error("Failed to create an account. Please try again later.");
      }
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/user-disabled":
          throw new Error("The user account has been disabled by an administrator.");
        case "auth/user-not-found":
          throw new Error("No user corresponding to the given email.");
        case "auth/wrong-password":
          throw new Error("The password is invalid.");
        default:
          throw new Error("Failed to log in. Please check your email and password.");
      }
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};