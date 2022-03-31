import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Chirps from './pages/Chirps';
import Projects from './pages/FilmDetails';
import People from './pages/People';
import PersonDetails from './pages/PersonDetails';
import Navbar from './components/Navbar'
import FilmDetails from './pages/FilmDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/chirps/*" element={<Chirps />}/>
        {/* <Route path="/films/:filmid/*" element={<FilmDetails />}/>
        <Route path="/people/*" element={<People />}/>
        <Route path="/people/:personid/*" element={<PersonDetails />}/>
         */}
          
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;