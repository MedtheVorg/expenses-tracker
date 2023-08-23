import Banner from './Banner';
import Container from './Container';
import History from './History';
import TransactionForm from './TransactionForm';

const ExpenseTracker = () => {
  return (
    <Container>
      <Banner />
      <History />
      <TransactionForm />
    </Container>
  );
};
export default ExpenseTracker;
