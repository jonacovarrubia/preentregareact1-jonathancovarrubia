import React from 'react';

const Item = ({ nombre, precio, imagen, agregarAlCarrito }) => {
  return (
    <div className="col-md-3 figura-contenedor">
      <img src={`img/${imagen}`} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Figura de acción de {nombre}.</p>
      <p>Precio: ${precio.toFixed(2)}</p>
      <button className="btn btn-primary" onClick={() => agregarAlCarrito(nombre, precio)}>
        Añadir al Carrito
      </button>
    </div>
  );
};

export default Item;
