// src/App.js
import React from "react";
import { DataProvider } from "./contexts/DataContext";
import DataDisplay from "./components/DataDisplay";
import DataName from "./components/DataName";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <DataProvider>
      <Router>
     
        <nav>
          <ul>
            <li>
              <Link to="/"> DataName </Link>
            </li>
            <li>
              <Link to="/dataDisplay">DataDisplay</Link>
            </li>
          </ul>
        </nav>
      

    
        
            <Routes>
              <Route exact path="/" element={<DataName />} />
              <Route path="/dataDisplay" element={<DataDisplay />} />
            </Routes>
            </Router>
        </DataProvider>
    </div>
  );
}

export default App;
