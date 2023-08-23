import { useContext } from 'react';
import { Context } from '../hooks/ExpenseTrackerContext';

const TransactionForm = () => {
  const {
    item,
    setItem,
    amount,
    setAmount,
    setExpenses,
    setExpense,
    setIncome,
  } = useContext(Context);

  function addTransaction(e) {
    e.preventDefault();

    let transaction = {
      id: new Date(),
      label: item,
      cost: amount,
      type: amount < 0 ? false : true,
    };

    setExpenses((prev) => [...prev, transaction]);

    if (Number(amount) > 0) {
      setIncome((prev) => Number(prev) + Number(amount));
    } else {
      setExpense((prev) => Number(prev) + Number(amount));
    }
    setAmount('');
    setItem('');
  }
  return (
    <form onSubmit={addTransaction}>
      <h2 className="font-semibold text-xl border-b-2 py-2">
        Add new transaction
      </h2>
      <div className="flex flex-col gap-2 my-4 ">
        <label htmlFor="transaction" className="font-semibold">
          Text
        </label>
        <input
          className="border-2 p-2 focus:outline-purple-800"
          type="text"
          id="transaction"
          placeholder="Enter text..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
          autoFocus
          required
        />
      </div>
      <div className="flex flex-col gap-2 my-4 ">
        <label htmlFor="transaction" className="font-semibold">
          Amount <br /> (negative -expense, positive - income
        </label>
        <input
          className="border-2 p-2 focus:outline-purple-800"
          type="number"
          id="transaction"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <button className="bg-[#916dde] w-full text-white py-2">
        Add transaction
      </button>
    </form>
  );
};
export default TransactionForm;
