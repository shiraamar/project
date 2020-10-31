import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const Register = () => (
  <Form className={"center"}>
    <Form.Group unstackable widths={1}>
      <Form.Input className="inputs" label='First name' placeholder='First name' />
  
    </Form.Group>
    <Form.Group unstackable widths={1}>
           <Form.Input className="inputs" label='Last name' placeholder='Last name' />
    </Form.Group>

    <Form.Group widths={1}>
      <Form.Input className="inputs" label='Mail' placeholder='Mail' />
     
    </Form.Group>

    <Form.Group widths={1}>
  
      <Form.Input className="inputs" label='Phone' placeholder='Phone' />
    </Form.Group>
   
    <Form.Checkbox className="inputs" label='I agree to the Terms and Conditions' />
    <Button className="inputs" type='submit'>Submit</Button>
  </Form>
)

export default Register;