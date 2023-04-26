import React from "react";
import "./App.css";
import { User } from "./User";

const App: React.FunctionComponent = () => {
  const users = [
    { name: "sunyang", age: 37 },
    { name: "maoyu", age: 34 },
  ];
  return (
    <div className="App">
      {users.map((user, key) => {
        return (
          <User key={key} keyindex={key} name={user.name} age={user.age} />
        );
      })}
    </div>
  );
};

export default App;
