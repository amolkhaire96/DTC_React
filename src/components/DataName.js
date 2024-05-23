
import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

const DataName = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data Names</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.body}</li> 
        ))}
      </ul>
    </div>
  );
};

export default DataName;
