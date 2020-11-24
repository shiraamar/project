


import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from '../axios'; 
import {useState} from 'react';
import { useForm } from "react-hook-form";


  


  function Register(props)
  {
    const [tz, setTz] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [permissionCode, setPermissionCode] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
      evt.preventDefault();
      axios.post(`cust/register/ ${tz}/${firstName}/${lastName}/${tel}/${email}/${permissionCode}/${password}`).then(x=>{
      console.log(x.data);
      })
      alert(`Submitting Name ${firstName}`);
     // reset();
  }

    return(
      <Form className={"center"} onSubmit={handleSubmit}>
      <Form.Group unstackable widths={1}>
        <Form.Input className="inputs" label='First name' placeholder='First name' value={firstName} onChange={(e) =>setFirstName(e.target.value)} />
    
      </Form.Group>
      <Form.Group unstackable widths={1}>
             <Form.Input className="inputs" label='Last name' placeholder='Last name' value={lastName} onChange={(e) =>setLastName(e.target.value)}/>
      </Form.Group>
  
      <Form.Group widths={1}>
        <Form.Input className="inputs" label='Mail' placeholder='Mail' value={email} onChange={(e) =>setEmail(e.target.value)}/>
       
      </Form.Group>
  
      <Form.Group widths={1}>
    
        <Form.Input className="inputs" label='Phone' placeholder='Phone' value={tel} onChange={(e) =>setTel(e.target.value)}/>
      </Form.Group>
     
      <Form.Checkbox className="inputs" label='I agree to the Terms and Conditions' />
      <Button className="inputs" type='submit' >Submit</Button>
    </Form>



    )
  }



export default Register;

