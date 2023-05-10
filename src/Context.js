//**********  context API

// 1 create a context (warehouse)
// 2 provider
// 3 cunsumer (X) || useContext hook

import React from "react";

// 1
const AppContext = React.createContext();

//2
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ fname: "ankit", age: "22" }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
