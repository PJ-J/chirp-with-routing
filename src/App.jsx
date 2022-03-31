import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
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
        <Route path="/films/*" element={<Films />}/>
        <Route path="/films/:filmid/*" element={<FilmDetails />}/>
        <Route path="/people/*" element={<People />}/>
        <Route path="/people/:personid/*" element={<PersonDetails />}/>
        
          
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;