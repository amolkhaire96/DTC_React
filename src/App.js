import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataContext } from './contexts/DataContext';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DataDisplay from './components/DataDisplay';
import DataName from './components/DataName';
import UserData from './components/UserData';
import UserData1 from './components/UserData1';
import UserData2 from './components/UserData2';
// import APIDemo from './APIData/APIDemo';



function App() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data.slice(0, 20));
        setData1(response.data.slice(20,40));
        setData2(response.data.slice(40,60));
        setData3(response.data.slice(60,80));
        setData4(response.data.slice(80,100));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      {/* <APIDemo/> */}
    <DataContext.Provider value={{ data, data1,data2,data3,data4,loading,error }}>
 
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/data-name">Data Name</Link>
              </li>
              <li>
                <Link to="/data-display">Data Display</Link>
              </li>
              <li>
                <Link to="/user-name">User Name</Link>
              </li>
              <li>
                <Link to="/user-name1">User Name1</Link>
              </li>
              <li>
                <Link to="/user-name2">User Name2</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<h1>Welcome to the App</h1>} />
            <Route path="/data-display" element={<DataDisplay />} />
            <Route path="/data-name" element={<DataName />} />
            <Route path="/user-name" element={<UserData />} />
            <Route path="/user-name1" element={<UserData1 />} />
            <Route path="/user-name2" element={<UserData2 />} />
          </Routes>
        </div>
      </Router>
     
    </DataContext.Provider>
    </div>
  );
}

export default App;
