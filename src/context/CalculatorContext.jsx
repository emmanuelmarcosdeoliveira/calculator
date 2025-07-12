import { createContext, useEffect, useState } from "react";

export const CalculatorContext = createContext();
export function CalculatorProvider({ children }) {
  const [history, setHistory] = useState([]);
  const historyStorageKey = "history";

  useEffect(() => {
    const savedHistory = localStorage.getItem(historyStorageKey);
    setHistory(JSON.parse(savedHistory || "[]"));
  }, []);

  function updateHistory(operation, parsedResult) {
    console.log(operation, parsedResult);
    setHistory((prev) => {
      const localMemory = [...prev, `${operation}=${parsedResult}`];
      localStorage.setItem(historyStorageKey, JSON.stringify(localMemory));
      return localMemory;
    });
  }
  return (
    <CalculatorContext.Provider value={{ history, updateHistory }}>
      {children}
    </CalculatorContext.Provider>
  );
}
