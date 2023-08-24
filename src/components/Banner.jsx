import { useExpenseTrackerContext } from "../providers/ExpenseTrackerContext";

const Banner = () => {
  const { expense, income } = useExpenseTrackerContext();
  return (
    <div className="">
      <h1 className="m-4 text-center text-2xl  font-bold">Expense Tracker</h1>
      <div className="my-8 font-semibold uppercase">
        <p>your balance</p>
        <p className="text-3xl">${income + expense}</p>
      </div>
      <div className="flex bg-white px-8 py-4  font-bold shadow-lg">
        <div className="flex flex-1 flex-col border-r-2 px-8 text-center uppercase">
          <span>income</span>
          <span className="text-xl text-green-500">${income}</span>
        </div>
        <div className="flex flex-1 flex-col px-8 text-center uppercase">
          <span>expense</span>
          <span className="text-xl text-red-500">${expense}</span>
        </div>
      </div>
    </div>
  );
};
export default Banner;
