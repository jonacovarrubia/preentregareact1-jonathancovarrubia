import React from 'react';
import Item from './Item';

const ItemListContainer = ({ greeting, agregarAlCarrito }) => {
  const figurasStarWars = [
    { nombre: "Anakin Skywalker", precio: 20.000 },
    { nombre: "Yoda", precio: 25.000 },
    { nombre: "Luke Skywalker", precio: 22.000 },
    { nombre: "Obi-Wan Kenobi", precio: 28.000 }  
  ];

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <div className="row">
        {figurasStarWars.map((figura, index) => (
          <Item key={index} {...figura} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
