import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const login = userId => ({
  type: "LOG_IN",
  userId
});

export const logout = () => ({
  type: "LOG_OUT"
});
