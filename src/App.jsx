import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './Head';
import About from './About';
import Dash from './Login';
import SignUp from './SignUp';
import Contus from './Contus';
import Navbar from './Navbar';
import Footer from './Footer';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Head/>} />
        <Route path='/About' element={<Head/>} />
        <Route path='/Contus' element={<Contus/>} />
        <Route path='/Login' element={<Dash/>} />
        <Route path='/Signup' element={<SignUp/>} />            
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;