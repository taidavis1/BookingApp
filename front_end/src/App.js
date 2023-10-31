import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import FloatBtn from './components/FloatBtn';
import Login from './components/Admin/Login';
import Index from './components/Admin/Index';
import CheckPoint from './components/Admin/client/Check-point';
import Checkin from './components/Admin/client/CheckIn';

import {Route , Routes , Navigate,  useLocation} from 'react-router-dom';
import React from 'react';
import useToken from './components/useToken';
function App() {
  const { token, removeToken, setToken } = useToken();
  const location = useLocation();
  const IsAdmin = location.pathname.includes('/Admin');
  return (
    <main>
      {!IsAdmin? (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/Services' element = {<Services/>} />
            <Route path='/Gallery' element = {<Gallery />} />
            <Route path='/Contact' element = {<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <FloatBtn />
          <Footer />
        </>
      ):
      <Routes>
        <Route path = '/Admin/*' element = {<Index token={token} removeToken={removeToken} setToken={setToken} />}>
            <Route index element = {<Navigate to ="Login" />} />
            <Route path = 'Login' element = {<Login setToken = {setToken} />}/>
            <Route path = 'Client' element = {<CheckPoint token={token} removeToken={removeToken} setToken={setToken}/>} />
            <Route path = 'Checking' element = {<Checkin token={token} removeToken={removeToken} setToken={setToken}/>} />

        </Route>
      </Routes>
    }
    </main>
  );
}

export default App;