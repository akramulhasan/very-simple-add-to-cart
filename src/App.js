import "./App.css"
import { useReducer, useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

function App() {
 let newFormData = {}
 const [formData, setFormData] = useState({
  text: "",
  email: "",
  password: "",
  gender: "",
  checkeBox: false,
  country: "",
 })
 const [checked, setChecked] = useState(false)
 const { text, email, password, gender, country } = formData
 const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
 }
 const handleCheckBox = (e) => {
  setChecked(!checked)
 }
 const handleSubmit = (e) => {
  e.preventDefault()
  newFormData = {
   text,
   email,
   password,
   gender,
   checkeBox: checked,
   country,
  }
  setFormData(newFormData)
  console.log(newFormData)
  setFormData({
   text: "",
   email: "",
   password: "",
   gender: "",
   checkeBox: false,
   country: "",
  })
  setChecked(false)
 }

 return (
  <Container>
   <Row>
    <Col>
     <h2 className="my-4 text-center">Registration Form</h2>

     <Form onSubmit={handleSubmit} className="my-4">
      <Form.Group className="mb-3" controlId="formBasicText">
       <Form.Label>Name</Form.Label>
       <Form.Control
        onChange={handleChange}
        type="text"
        value={text}
        name="text"
        placeholder="Full Name"
       />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control
        type="email"
        value={email}
        onChange={handleChange}
        name="email"
        placeholder="Enter email"
       />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control
        type="password"
        value={password}
        onChange={handleChange}
        name="password"
        placeholder="Password"
       />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRadio">
       <Form.Label>Gender</Form.Label>
       <br />
       <input
        value="Male"
        checked={gender === "Male"}
        onChange={handleChange}
        type="radio"
        name="gender"
       />{" "}
       Male
       <input
        value="Female"
        checked={gender === "Female"}
        onChange={handleChange}
        type="radio"
        name="gender"
       />{" "}
       Female
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       <Form.Check
        checked={checked}
        onChange={handleCheckBox}
        type="checkbox"
        label="Agreement"
       />
      </Form.Group>
      <Form.Select
       value={country}
       name="country"
       onChange={handleChange}
       aria-label="Select Country"
      >
       <option>Select Country</option>
       <option value="Bangladesh">Bangladesh</option>
       <option value="Nepal">Nepal</option>
       <option value="Pakistan">Pakistan</option>
      </Form.Select>
      <Button className="my-2" variant="primary" type="submit">
       Submit
      </Button>
     </Form>
    </Col>
   </Row>
  </Container>
 )
}

export default App
