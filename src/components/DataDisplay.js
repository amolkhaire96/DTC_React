
import React, { useContext } from 'react';
import './DataDisplay.css';
import { DataContext } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

const DataDisplay = () => {
  const { data1, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data from 20-40 objects</h1>
      <ul  className='name'> 
        {data1.map(item => (
          <div  key={item.id} className='dataFlex'>
            <li className='dataId'>{item.id}</li>
           <li style={{backgroundColor:'green'}}>{item.title}</li> 
          <li>{item.body}</li> 
          <button>View Details</button>
          </div>
        ))}
      </ul>
      <nav>
        <Link to="/data-name">Go to Data Name</Link>
      </nav>
    </div>
  );
};

export default DataDisplay;
