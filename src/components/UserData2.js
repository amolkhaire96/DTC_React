import React, { useContext } from 'react';
import './DataDisplay.css';
import { DataContext } from '../contexts/DataContext';

const UserData2 = () => {
    const { data4, loading, error } = useContext(DataContext);
    if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
       <h1>Fetched Data from 80-100 objects</h1>
      <ul  className='name'> 
        {data4.map(item => (
          <div  key={item.id} className='dataFlex'>
            <li className='dataId'>{item.id}</li>
           <li style={{backgroundColor:'green'}}>{item.title}</li> 
          <li>{item.body}</li> 
          <button>View Details</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default UserData2
