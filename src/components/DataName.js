
import React, { useContext, useState } from 'react';
import './DataDisplay.css';
import { DataContext } from '../contexts/DataContext';
import APIDemo from '../APIData/APIDemo';
// import openInNewTab from '../openInNewTab';

const DataName = () => {
  const [viewDetails,setViewDetails] = useState(false)
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleClick = () => {
    console.log('Firtsd item Clicked')
    setViewDetails(true);
  }

  return (
    <div>
      <h1>Fetched Data from 01-20 Objects</h1>
      <ul className='name'>
        {data.map(item => (
          <div  key={item.id} className='dataFlex'>
            <li className='dataId'>{item.id}</li>
           <li style={{backgroundColor:'green'}}>{item.title}</li> 
          <li>{item.body}</li> 
          <button onClick={item.id === 1 ? handleClick : undefined}>View Details</button>
          </div>
        )).filter((element, index) => index < 5)}
      </ul>
      {viewDetails && <APIDemo />}
    </div>
  );
};


export default DataName;
