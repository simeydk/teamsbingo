import { useState, useEffect } from 'react'

const getLS = (key, fallback) => {
  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse stored json or if none return initialValue
    return item ? JSON.parse(item) : fallback;
  } catch (error) {
    // If error also return initialValue
    console.log(error);
    return fallback;
  }
}

// Hook
export function useLocalStorage(key, initialValue) {
  const get = () => getLS(key, initialValue)
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(get());

  let bc
  useEffect(() => {
    bc = new BroadcastChannel('useLocalStorageHook Broadcast Channel for ' + key)
    bc.onmessage = () => setStoredValue(get())

    return () => bc.close()
  })

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      bc.postMessage('value updated')
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}