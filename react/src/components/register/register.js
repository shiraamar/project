


import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from '../../axios'; 
import {useState} from 'react';
import { useForm } from "react-hook-form";
import '../CSS/Register.css'


  


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
      // axios.get(`cust/register/ ${tz}/${firstName}/${lastName}/${tel}/${email}/${permissionCode}/${password}`,  {
      //   headers: {
      //     'Content-Type': null
      //   }
      // }
      axios.get(`cust/register/ ${tz}/${firstName}/${lastName}/${tel}/${email}/${permissionCode}/${password}`).then(res=>{console.log(res)}).catch(err=>{console.log("error ")})
   
  }

    return(
      <Form className={"center"} onSubmit={handleSubmit}>
      <Form.Group unstackable widths={1}>
        <Form.Input className="inputs" label='שם פרטי' placeholder='שם פרטי' value={firstName} onChange={(e) =>setFirstName(e.target.value)} />
    
      </Form.Group>
      <Form.Group unstackable widths={1}>
             <Form.Input className="inputs" label='שם משפחה' placeholder='שם משפחה' value={lastName} onChange={(e) =>setLastName(e.target.value)}/>
      </Form.Group>
  
      <Form.Group widths={1}>
        <Form.Input className="inputs" label='כתובת אימייל' placeholder='כתובת אימייל' value={email} onChange={(e) =>setEmail(e.target.value)}/>
       
      </Form.Group>
  
      <Form.Group widths={1}>
    
        <Form.Input className="inputs" label='טלפון' placeholder='טלפון' value={tel} onChange={(e) =>setTel(e.target.value)}/>
      </Form.Group>
     
      <Form.Checkbox className="inputs" label='אני מסכים לכל התנאים' />
      <Button className="inputs" type='submit' >אישור</Button>
    </Form>



    )
  }



export default Register;

