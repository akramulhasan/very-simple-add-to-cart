import React from "react"
import { Col } from "react-bootstrap"

function Cart({ cartItem }) {
 const totalPrice = cartItem.reduce((total, item) => {
  return total + item.price
 }, 0)
 return (
  <Col className="text-start" sm={4}>
   <h2>Cart Item: {cartItem.length}</h2>
   <h3>Total Price:{totalPrice}</h3>
  </Col>
 )
}

export default Cart
