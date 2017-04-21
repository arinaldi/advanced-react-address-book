import React from "react";
import UserDetail from "./components/UserDetail"
import ListOfUsers from "./components/ListOfUsers"
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div>
        <h2>React Address Book</h2>
      </div>
      <ListOfUsers users={props.users} />
      <UserDetail user={props.users[3]} />
    </div>
  );
}

export default App;
