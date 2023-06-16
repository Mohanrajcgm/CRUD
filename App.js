import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Cartitem from "./Cartitem";
import{useState}from 'react'

function App() {
  let products=[
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
    },
  ]
const [cart,setCart] = useState([])
const[total, setTotal]=useState(0)
  let addToCart=(data)=>{
    setCart([...cart,data])
    setTotal(total + data.price)
  }
  let removeFromCart=(data)=>{
    let index=cart.findIndex((obj) => obj.id === data.id)
    cart.splice(index,1)
    setCart([...cart])
    setTotal(total-data.price)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
          {
            products.map((item)=>{
              return(
              <Card cartItem={cart} data={item} handleToAddToCart={addToCart}></Card>
              )
            })
          }
          </div>
        </div>
        <div className="col-lg-4">{
          cart.length===0?<div>no items</div> :<div className="row">
          <ol class="list-group list-group-numbered">
            {cart.map((cartitem)=>{
              return <Cartitem cartitem={cartitem}  removeFromCart={removeFromCart}></Cartitem>
            })}
          </ol>
          <h6>Total-{total}</h6>
        </div>
        }
          
      </div>
    </div>
    </div>
  );
}

export default App;
