import React, { Component ,useState} from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

 function Loginpage () {

const history = useNavigate()
	const loginRed = () =>{
		alert('Alert')
	}
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
   function test()  {
    const pwd = bcrypt.hashSync(password, salt);
    axios.post('http://localhost:2000/login', {
      username: username,
      password: pwd,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      history('/FileEncryption');
    }).then((res) => {
      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });
      
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error"
        });
      }
    });
    
  }
    return (
      <div style={{
        padding:'17.1%',
        height:'51%',
        background: `url(https://wallpaperaccess.com/full/1267583.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `center`}}>

        <div >
          
        </div>

        <div style={{marginBottom: '30px' , marginLeft:'500px'}}>
         
        <h2 style={{font: ' small-caps bold 12px/30px Georgia serif' , fontSize: '25px'}}>Login</h2>
        <br></br>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <br /><br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={username == '' && password == ''}
            onClick={test}
          >
            Login
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/SignupPage">
            Register
          </Link>
        </div>
      </div>
    );
}


export default Loginpage