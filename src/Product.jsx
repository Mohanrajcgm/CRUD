import React from 'react';
import Products from './Products';

function Product() {
    let product =[
        {
          id:1,
          title:"samsung",
          price:1000
        },
        {
          id:2,
          title:"redmi",
          price:2000
        },
        {
          id:3,
          title:"oppo",
          price:3000
        },
        {
          id:4,
          title:"vivo",
          price:4000
        },
        {
          id:5,
          title:"oneplus",
          price:5000
        },
        {
          id:6,
          title:"iphone",
          price:6000
        }
      ]
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
        {
          product.map((item)=>{
            return(
            <Products data={item} ></Products>
            )
          })
        }
        </div>
      </div>
      </div>
      </div>

  );
}

export default Product;
