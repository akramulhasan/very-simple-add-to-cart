import React, { useState } from "react"
import { Navbar, Container, Row, Col, Form, Button } from "react-bootstrap"
import Header from "./Header"
import Shop from "./Shop"
import Cart from "./Cart"
function Home() {
 const items = [
  {
   id: 1,
   name: "Laptop",
   price: 67500,
   image: "https://i.ibb.co/X3RPKP1/pexels-karsten-madsen-18105-3.jpg",
  },
  {
   id: 2,
   name: "Mobile",
   price: 23000,
   image: "https://i.ibb.co/K52Pb8X/pexels-photomix-company-887751.jpg",
  },
  {
   id: 3,
   name: "Camera",
   price: 45000,
   image: "https://i.ibb.co/xS6T8xr/pexels-kaique-rocha-243757.jpg",
  },
  {
   id: 4,
   name: "TV",
   price: 78000,
   image: "https://i.ibb.co/XzrpZ2J/pexels-lisa-fotios-1444416.jpg",
  },
  {
   id: 5,
   name: "iPhone",
   price: 80000,
   image: "https://i.ibb.co/fGH5hnp/pexels-torsten-dettlaff-193004.jpg",
  },
 ]

 const [cartItem, setCartItem] = useState([])

 const onCart = (item) => {
  const totalCartItem = [...cartItem, item]
  setCartItem(totalCartItem)
 }
 return (
  <>
   <Header />
   <Container>
    <Row>
     <Shop onCart={onCart} items={items} />
     <Cart cartItem={cartItem} />
    </Row>
   </Container>
  </>
 )
}

export default Home
