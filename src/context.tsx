import * as React from "react";

export type AppContextType = {
  name: string;
  age: number;
  feature: string;
  updateName: Function;
  updateAge: Function;
  updateFeature: Function;
};

export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType
);

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider = (props: AppContextProviderProps) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [feature, setFeature] = React.useState("");

  const appContext = {
    name,
    age,
    feature,
    updateName: (name: string) => setName(name),
    updateAge: (age: number) => setAge(age),
    updateFeature: (feature: string) => setFeature(feature),
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};
