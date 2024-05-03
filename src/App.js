import logo from './logo.svg';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Outlet/>
        <ScrollRestoration/>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
