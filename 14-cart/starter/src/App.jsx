// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';

function App() {
  const { check } = useGlobalContext();
  console.log(check);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
