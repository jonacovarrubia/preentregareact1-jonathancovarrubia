import React from 'react';

const Cart = ({ carrito }) => {
  // Lógica para mostrar el contenido del carrito
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
