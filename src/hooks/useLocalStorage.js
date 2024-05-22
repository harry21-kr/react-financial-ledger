import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const [item, setItem] = useState([]);

  const addItem = (value) => {
    const newItem = JSON.stringify([...item, value]);
    localStorage.setItem(key, newItem);
    setItem([...item, value]);
  };

  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem(key));
    setItem(localItem ?? []);
  }, [key]);

  return { item, addItem };
};

export default useLocalStorage;
