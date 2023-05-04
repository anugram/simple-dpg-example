import './App.css';
import {React} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './layouts/Admin';
import User from './layouts/User';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import MyCard from './components/userComponents/MyCard';
import CreateCard from './components/userComponents/CreateCard';
import ListCards from './components/adminComponents/ListCards';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path="/user/home" element={<User />}>
            <Route path="cards" element={<MyCard />} />
            <Route path="addCard" element={<CreateCard />} />
          </Route>
          <Route path="/admin/home" element={<Admin />}>
            <Route exact path="cards" element={<ListCards />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;