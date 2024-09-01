import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Waiter from './components/Waiter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/waiter" element={<Waiter />} />
      </Routes>
    </Router>
  );
}

export default App;
