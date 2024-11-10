import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Info from './pages/Info';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
};

export default App;
