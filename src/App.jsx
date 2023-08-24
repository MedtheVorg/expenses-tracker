import ExpenseTracker from "./components/ExpenseTracker";
import ExpenseTrackerContext from "./providers/ExpenseTrackerContext";

function App() {
  return (
    <ExpenseTrackerContext>
      <ExpenseTracker />
    </ExpenseTrackerContext>
  );
}

export default App;
