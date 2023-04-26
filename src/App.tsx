import React from "react";
import "./App.css";

interface User {
  name: string;
  age: number;
  email: string;
}

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <UserComponent name="Sun" age={1} email="Sun@" />
    </div>
  );
};

const UserComponent = (props: User): JSX.Element => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
