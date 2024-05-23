import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DataProvider from './providers/DataProvider';
import DataDisplay from './components/DataDisplay';
import DataName from './components/DataName';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/data-display">Data Display</Link>
              </li>
              <li>
                <Link to="/data-name">Data Name</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<h1>Welcome to the App</h1>} />
            <Route path="/data-display" element={<DataDisplay />} />
            <Route path="/data-name" element={<DataName />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
