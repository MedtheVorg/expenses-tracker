import ExpenseTracker from './components/ExpenseTracker';
import ExpenseTrackerContext from './hooks/ExpenseTrackerContext';

function App() {
  return (
    <ExpenseTrackerContext>
      <ExpenseTracker />
    </ExpenseTrackerContext>
  );
}

export default App;
