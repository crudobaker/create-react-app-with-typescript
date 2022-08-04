import * as React from "react";

export type State = {
  name: string;
  updateName: Function;
};

export function createState(): State {
  const [name, setName] = React.useState("");

  return { name, updateName: (name: string) => setName(name) };
}
