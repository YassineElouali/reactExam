import { createContext, useCallback, useContext, useEffect, useState } from "react";

const LocalStorageContext = createContext();

// eslint-disable-next-line react/prop-types
export default function LocalStorageProvider({ children }) {
  const [storage, setStorage] = useState({});

  const setItem = useCallback((key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStorage((prev) => ({ ...prev, [key]: value }));
  }, []);
  const removeItem = useCallback((key) => {
    localStorage.removeItem(key);
    setStorage((prev) => {
      const updatedStorage = { ...prev };
      delete updatedStorage[key];
      return updatedStorage;
    });
  }, []);
  useEffect(() => {
    const initializeStorage = () => {
      const initialData = {};
      Object.keys(localStorage).forEach((key) => {
        initialData[key] = localStorage.getItem(key);
      });
      setStorage(initialData);
    };
    initializeStorage();
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key && event.newValue !== storage[event.key]) {
        const updatedValue = JSON.parse(event.newValue);
        setStorage((prev) => ({ ...prev, [event.key]: updatedValue }));
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [storage]);

  return (
    <LocalStorageContext.Provider value={{ storage, setItem, removeItem }}>
      {children}
    </LocalStorageContext.Provider>
  );
}


// eslint-disable-next-line react-refresh/only-export-components
export const useLocalStorage = (key) => {
  const { storage, setItem, removeItem } = useContext(LocalStorageContext);
  const storedValue = storage[key];

  return [storedValue, (value) => setItem(key, value), () => removeItem(key)];
};
