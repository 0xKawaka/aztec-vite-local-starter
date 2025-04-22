import './App.css'
import WalletInfo from './components/WalletInfo';
import { useWallet } from './hooks';

function App() {
  const { wallet, address, isLoading } = useWallet();

  return (
    <div className="app-container">
      <WalletInfo />
      {isLoading && <div>Loading...</div>}
      {address && <div>
        <p>Selected address: {address?.toString()}</p>
      </div>}
    </div>
  );
}

export default App
