import './App.scss';
import Home from './Component/Home/Index';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
     < Home />
    </CartProvider>
  );
}

export default App;
