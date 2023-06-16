import React from 'react';

function Cartitem({cartitem,removeFromCart}) {
  return (
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{cartitem.title}</div>
      {cartitem.price}
    </div>
    <h6>Total-100</h6>
    <button onClick={()=>removeFromCart(cartitem)}  className="badge bg-primary rounded-pill">x</button>
  </li>

  );
}

export default Cartitem;
