import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AllPlayerView({ players, onDelete }) {


  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this player?');
    if (confirmDelete) {
     

onDelete(id)      
    }   
  };

  return (
    <div className='grid'>
      {players.map((player) => (
        <div key={player.id} className='grid-item'>
          <p>{player.name}</p>
          <img src={player.imageUrl} alt={player.name} />
          <div>
            <Link to={`/details/${player.id}`}>
              <button className='button'>Details</button>
            </Link>
            <button className='button' onClick={() => handleDelete(player.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
