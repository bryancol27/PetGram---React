import React, { createContext, useState } from "react";

export const Context = createContext();

const ProviderContext = ({ children }) => {

  const [ isAuth, setIsAuth ] = useState(() => {
    return localStorage.getItem('token')
  });

  const value = {
    isAuth,
    switchAuth: token => {
      setIsAuth(true);
      localStorage.setItem('token', token)
    },
    quitAuth: () => {
      setIsAuth(false);
      localStorage.clear();
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default ProviderContext
