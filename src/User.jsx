import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  
  const {username} = useParams();

return (
    <div className='container'>
      <strong >Welcone {username}</strong> 
    </div>
  )
}
