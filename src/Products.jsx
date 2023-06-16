import React from 'react';

function Products({data}) {
  return (
    <div className='col-lg-4 mb-2'>
    <div className="card" style={{width:' 15rem'}}>
    <img src="https://picsum.photos/100/100" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">{data.price}</p>
    </div>
  </div>
  </div>
  );
}

export default Products;
