import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const [item, setItem] = useState([]);

  const addItem = (value) => {
    const formattedItem = JSON.stringify([...item, value]);
    localStorage.setItem(key, formattedItem);
    setItem([...item, value]);
  };

  const getItemById = (id) => {
    const formattedItem = JSON.parse(localStorage.getItem(key)).find(
      (item) => item.id === id
    );
    return formattedItem;
  };

  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem(key));
    setItem(localItem ?? []);
  }, [key]);

  return { item, addItem, getItemById };
};

export default useLocalStorage;
