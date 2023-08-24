import Record from "./Record";

import { useExpenseTrackerContext } from "../providers/ExpenseTrackerContext";

const History = () => {
  const { expenses } = useExpenseTrackerContext();
  return (
    <div className="my-8">
      <h2 className="border-b-2 py-2 text-xl font-semibold">History</h2>
      <ul className="my-4 flex flex-col gap-4">
        {expenses.map((transaction) => (
          <Record key={transaction.id} {...transaction} />
        ))}
      </ul>
    </div>
  );
};
export default History;
