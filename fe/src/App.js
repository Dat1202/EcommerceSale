import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './base.css';
import './style.css';
import Store from './component/Store';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Store />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
