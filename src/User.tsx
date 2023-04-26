import React from "react";

interface UserInterface {
  name: string;
  age: number;
  keyindex: number;
}

export const User = (props: UserInterface): JSX.Element => {
  return (
    <div>
      {props.keyindex} {props.name} {props.age}
    </div>
  );
};
