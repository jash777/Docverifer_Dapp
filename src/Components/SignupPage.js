import React, { Component ,useNavigation} from 'react';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
const axios = require('axios');

export default class SignupPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = () => {

    axios.post('http://localhost:2000/register', {
      username: this.state.username,
      password: this.state.password,
    }).then((res) => {
      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });
      
    }).catch((err) => {
      swal({
        
      });
    });
  }

  


  render() {
    return (
      <div style={{
        padding:'9.4%',
        height:'50%',
        background: `url(https://wallpaperaccess.com/full/1267583.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `center`}}>
      <div >
        <div   style={{marginBottom: '30px' , variant : "outlined",marginLeft:'500px'}} >
        <h2 style={{font: ' small-caps bold 12px/30px Georgia serif' , fontSize: '25px'}}>Register</h2>
        <br></br>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="User Name"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="confirm_password"
            value={this.state.confirm_password}
            onChange={this.onChange}
            placeholder="Confirm Password"
            required
          />
          <br /><br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username == '' && this.state.password == ''}
            onClick={this.register}
          >
            Register
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="LoginPage">
            Login
          </Link>
          <br></br><br></br>
          <br></br>

        </div>
      </div>
      </div>
    );
  }
}