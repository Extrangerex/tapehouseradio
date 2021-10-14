import { createContext, useEffect, useState } from "react";

const defaultApplicationContextValue = {
  user: null,
};

const ApplicationContext = createContext(defaultApplicationContextValue);

export function ApplicationContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authJson = window.localStorage.getItem("AUTH-DATA");

    if (authJson) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <ApplicationContext.Provider value={(user, setUser)}>
      {children}
    </ApplicationContext.Provider>
  );
}
