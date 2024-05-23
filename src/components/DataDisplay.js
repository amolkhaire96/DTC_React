
import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

const DataDisplay = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <nav>
        <Link to="/data-name">Go to Data Name</Link>
      </nav>
    </div>
  );
};

export default DataDisplay;
