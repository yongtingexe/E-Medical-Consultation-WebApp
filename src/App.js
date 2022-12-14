import './App.css';
import * as React from 'react';
import { Routes , Route } from 'react-router-dom'
import Card from './Department';
import Navbar from './Navbar';
import General from './General';
import Footer from './Footer'
import Pediatrics from './Pediatrics'
import Banner from './Banner'

function App() {
  return (
    <div classname="App">
      <div classname="Navbar">
          <Navbar/>
          <Banner></Banner>
      </div>


      <div classname="Specialty">
        <h1>How can we help you?
        <Card/>
        </h1>
        <Routes>
            <Route exact path='/general' element={<General/>}/>
            <Route exact path='/pediatrics' element={<Pediatrics/>}/>
        </Routes>
        </div>

        <div>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
