import { FaTrash } from "react-icons/fa";
import { useExpenseTrackerContext } from "../providers/ExpenseTrackerContext";

const Record = (props) => {
  const { label, cost, type, id } = props;
  const { expenses, setExpenses, setIncome, setExpense } =
    useExpenseTrackerContext();

  function removeRecord() {
    if (Number(cost) > 0) {
      setIncome((prev) => Number(prev) - Number(cost));
    } else {
      setExpense((prev) => Number(prev) - Number(cost));
    }
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  return (
    <li className="flex h-full w-full items-center justify-between font-semibold shadow-xl  ">
      <button className="border-2 p-2" onClick={removeRecord}>
        <FaTrash />
      </button>
      <div className="flex flex-1 items-center justify-between px-4">
        <p className="break-words capitalize">{label}</p>
        <p> {cost}</p>
      </div>
      {type ? (
        <div className={`h-[40px] w-[5px]  bg-green-500`}></div>
      ) : (
        <div className={`h-[40px] w-[5px]  bg-red-500`}></div>
      )}
    </li>
  );
};
export default Record;
