"use client";
import { useState } from "react";

/**
 * Custom hook for managing values in local storage.
 *
 * @param key - The key to use for storing the value in local storage.
 * @param defaultValue - The default value to use if no value is found in local storage.
 * @returns An array containing the current value, a function to set the value, a function to remove the value, and a function to get all local storage values.
 * @example const [data, setData, removeData, getAllData] = useLocalStorage(key);
 */

const useLocalStorage = (key?: string, defaultValue: any[] = []) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    if (!key) {
      return defaultValue;
    }
    try {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value) || defaultValue;
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const setLocalStorageStateValue = (valueOrFn: any) => {
    let newValue;
    if (!key) {
      throw new Error("useLocalStorage key may not be falsy");
    }
    if (typeof valueOrFn === "function") {
      const fn = valueOrFn;
      newValue = fn(localStorageValue);
    } else {
      newValue = valueOrFn;
    }
    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalStorageValue(newValue);
  };
  const removeLocalStorageValue = (name: string) => {
    if (!key) {
      throw new Error("useLocalStorage key may not be falsy");
    }
    const updatedTodos = localStorageValue.filter(
      (todo: any) => todo.name !== name
    );
    localStorage.setItem(key, JSON.stringify(updatedTodos));
    setLocalStorageValue(updatedTodos);
  };
  const getAllLocalStorageValues = () => {
    const item = localStorage.getItem("Todos");
    return item ? JSON.parse(item) : [];
  };
  return [
    localStorageValue,
    setLocalStorageStateValue,
    removeLocalStorageValue,
    getAllLocalStorageValues,
  ];
};

export { useLocalStorage };
