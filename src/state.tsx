import * as React from "react";

export type State = {
  name: string;
  updateName: Function;
  age: number;
  updateAge: Function;
};

export function createState(): State {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(0);

  return {
    name,
    updateName: (name: string) => setName(name),
    age,
    updateAge: (age: number) => setAge(age),
  };
}
