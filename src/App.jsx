import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, PowerPickleHome } from './pages';
import PowerPickle from './pages/PowerPickle'; // Assuming this is the path to your PowerPickle component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/powerpickle" element={<PowerPickleHome />} />
      </Routes>
    </Router>
  );
}

export default App;