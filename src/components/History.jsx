import { useContext } from 'react';
import Record from './Record';
import { Context } from '../hooks/ExpenseTrackerContext';

const History = () => {
  const { expenses } = useContext(Context);
  return (
    <div className="my-8">
      <h2 className="font-semibold text-xl border-b-2 py-2">History</h2>
      <ul className="my-4 flex flex-col gap-4">
        {expenses.map((transaction) => (
          <Record key={transaction.id} {...transaction} />
        ))}
      </ul>
    </div>
  );
};
export default History;
