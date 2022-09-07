import { createContext, useContext, useState, useEffect } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [homeContextValue, setHomeContextValue] = useState({
    userId: 0,
    id: 0,
    title: "",
    completed: false
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setHomeContextValue(json))
  }, [])

  return (
    <HomeContext.Provider value={{ homeContextValue, setHomeContextValue }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error('HomeContext must be used within a HomeProvider');
  }
  return context;
};