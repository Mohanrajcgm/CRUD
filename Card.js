
import React from 'react';
import Cartitem from './Cartitem';  

function Card({data,cartItem ,handleToAddToCart}) {
  return (
    <div className='col-lg-4 mb-2'>
    <div className="card" style={{width:' 15rem'}}>
    <img src="https://picsum.photos/100/100" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">{data.price}</p>
      <button disabled={cartItem.some((obj) => obj.id===data.id)} onClick={()=>{handleToAddToCart(data)}} className="btn btn-primary">add to cart</button>
    </div>
  </div>
  </div>
  );
}

export default Card;
