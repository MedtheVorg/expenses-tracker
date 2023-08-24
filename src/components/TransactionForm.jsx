import { useExpenseTrackerContext } from "../providers/ExpenseTrackerContext";

const TransactionForm = () => {
  const {
    item,
    setItem,
    amount,
    setAmount,
    setExpenses,
    setExpense,
    setIncome,
  } = useExpenseTrackerContext();

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
    setAmount("");
    setItem("");
  }
  return (
    <form onSubmit={addTransaction} className=" p-2">
      <h2 className="border-b-2 py-2 text-xl font-semibold">
        Add new transaction
      </h2>
      <div className="my-4 flex flex-col gap-2 ">
        <label htmlFor="transaction" className="font-semibold">
          Label
        </label>
        <input
          className="border-2 p-2 focus:outline-[#E34C67]"
          type="text"
          id="transaction"
          placeholder="Enter text..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
          autoFocus
          required
        />
      </div>
      <div className="my-4 flex flex-col gap-2 ">
        <label htmlFor="transaction" className="font-semibold">
          Amount <br /> (negative -expense, positive - income )
        </label>
        <input
          className="border-2 p-2 focus:outline-[#E34C67]"
          type="number"
          id="transaction"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <button className="w-full bg-[#E34C67] py-2 text-white">
        Add transaction
      </button>
    </form>
  );
};
export default TransactionForm;
