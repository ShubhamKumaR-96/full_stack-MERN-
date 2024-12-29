import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Shubh from './components/Shubh';

const App = () => {
  return (
   <>
   
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/shubh" element={<Shubh />} />
      </Routes>
   
   </>
  );
};

export default App;