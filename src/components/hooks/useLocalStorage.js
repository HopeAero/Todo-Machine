import React from 'react';


function useLocalStorage(itemName, initialValue) {  
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const value = window.localStorage.getItem(itemName);
        if (value !== null) {
          setItem(JSON.parse(value));
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [itemName]);
    
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  
  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };