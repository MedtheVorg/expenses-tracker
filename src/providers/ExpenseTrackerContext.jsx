import { createContext, useContext, useState } from "react";

export const Context = createContext({});

const ExpenseTrackerContext = ({ children }) => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  return (
    <Context.Provider
      value={{
        item,
        setItem,
        amount,
        setAmount,
        expenses,
        setExpenses,
        income,
        setIncome,
        expense,
        setExpense,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useExpenseTrackerContext() {
  return useContext(Context);
}

export default ExpenseTrackerContext;
