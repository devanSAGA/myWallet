import React, { Component } from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase";
import configureStore from "./store";
import { login, logout } from "./actions/userAuthentication";
import { history } from "./routers/AppRouter";
const store = configureStore();
class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch(login(user.uid));
        history.push("/dashboard");
      } else {
        store.dispatch(logout());
        history.push("/");
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
