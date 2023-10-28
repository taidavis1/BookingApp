import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import FloatBtn from './components/FloatBtn';
import Booking from './components/Booking/BookingPage';
import BookingInfo from './components/Booking/BookingInfo';
import BookingDate from './components/Booking/BookingDate';
import BookingServices from './components/Booking/BookingServices';
import Login from './components/Admin/Login';
import View from './components/Admin/View';
import CheckPoint from './components/Admin/client/Check-point';
import Index from './components/Admin/Index';
import {Route , Routes , Navigate,  useLocation} from 'react-router-dom';
import React from 'react';
import BookingTech from './components/Booking/BookingTech';
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
            <Route  path = '/Booking/*' element = {<Booking />}>
              <Route index element={<Navigate to="services" />} />
              <Route path = 'services' element = {<BookingServices/>} />
              <Route path = 'datetime' element = {<BookingDate />} />
              <Route path = 'bookingtechnician' element = {<BookingTech />}/>
              <Route path = 'info' element = {<BookingInfo />} />
            </Route>
          </Routes>
          <FloatBtn />
          <Footer />
        </>
      ):
      <Routes>
        <Route path = '/Admin/*' element = {<Index />}>
            <Route index element = {<Navigate to ="Login" />} />
            <Route path = 'Login' element = {<Login setToken = {setToken} />}/>
            <Route path = 'View' element = {<View token={token} removeToken={removeToken} setToken={setToken}/>} />
            <Route path = 'Client' element = {<CheckPoint token={token} removeToken={removeToken} setToken={setToken}/>} />
        </Route>
      </Routes>
    }
    </main>
  );
}

export default App;
