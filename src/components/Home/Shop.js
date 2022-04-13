import React from "react"
import { Button, Col } from "react-bootstrap"
import "./Shop.css"

function Shop({ items, onCart }) {
 //const [cartItem, setCartItem] = useState([])
 const handleCart = (item) => {
  onCart(item)
 }
 return (
  <Col className="col-shop" sm={8}>
   {items.map((item) => (
    <div key={item.id} className="item-wrapper my-4">
     <div className="image me-4">
      <img src={item.image} alt="" />
     </div>
     <div className="item-info">
      <h2>{item.name}</h2>
      <h4>Price: {item.price}</h4>
      <Button onClick={() => handleCart(item)}>Add to Cart</Button>
     </div>
    </div>
   ))}
  </Col>
 )
}

export default Shop
