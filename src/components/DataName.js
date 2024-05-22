import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

const DataName = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data from DataName</h1>
      <ul>
        {data.map((item) => {
            return (
            <div key={item.id}>
                <li>{item.id}</li>
                
               <li >.{item.body}</li>
          </div>)
          
        })}
      </ul>
    </div>
  );
};

export default DataName;