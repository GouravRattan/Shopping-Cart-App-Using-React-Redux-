import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import Cart from './pages/Cart';
import Navbar from './component/Navbar';
import Counter from './component/Counter';
import store from './/store/store';

function App() {
  return (
    <div className="App">

      <Provider store={store}>

      <BrowserRouter>
      <Navbar />
      <Counter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      
      </Provider>
    </div>
  );
}

export default App;
