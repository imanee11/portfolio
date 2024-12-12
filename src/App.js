import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';


const App = () => {
  return (
    <div className='bg-[#0c0e0e]' >
      
    
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/editing" element={<Editing />} />
      <Route path="/shooting" element={<Shooting />} /> */} 
    </Routes>


    </div>
  );
};

export default App;