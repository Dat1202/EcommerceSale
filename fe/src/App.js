import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './base.css';
import './style.css';
import Login from './component/Login';
import Home from './component/Home';
import { createContext, useReducer } from 'react';
import MyUserReducer from "./reducers/MyUserReducer";
import cookie from "react-cookies";
import Register from './component/Register';
import Store from './component/Store/Store';
import { CreateStore } from './component/Store/CreateStore';
import 'moment/locale/vi';

export const MyUserContext = createContext();

function App() {
  const [user, dispatch] = useReducer(MyUserReducer, cookie.load("user") || null)
  return (
    <MyUserContext.Provider value={[user, dispatch]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store/:storeId" element={<Store />} />
          <Route path="/create-store" element={<CreateStore />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </MyUserContext.Provider>
  );
}

export default App;
