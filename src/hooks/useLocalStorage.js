import React,{ useState, useEffect } from 'react'

const useLocalStorage = (key) => {

  const [ storedValue, setValue ] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem(key) ?? 'false';
    setValue(JSON.parse(item))
  }, []); 

  const setLocalstorage = value => {
    try{
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value)
    }
    catch(e){
      console.error(e);
    }
  };

  return { storedValue, setLocalstorage }
};

export { useLocalStorage }
