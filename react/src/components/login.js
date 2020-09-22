
import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom';
import sign from './register'

const Login = () => (
  
  <Grid className="formRe" textAlign='right'  style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> התחבר
      </Header>
      <Form size='large' >
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='כתובת מייל' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='סיסמה'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
        <div></div>
      <Link to='/sign'>  <button  id=" signup">signup</button> </Link>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)
export default Login;