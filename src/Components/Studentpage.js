import React, { Component ,useState} from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');
const ipfsAPI = require('ipfs-api');
const bcrypt = require('bcryptjs');
var CryptoJS = require("crypto-js");
const FileSaver = require('file-saver');
var salt = bcrypt.genSaltSync(10);
const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'});

 function Studentpage () {
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  function test () {
    const pass = username
    const validCID = password
    // Getting File Content From IPFS
    var promise = new Promise((resolve) => {
      ipfs.files.get(validCID, function (err, files) {
        files.forEach((file) => {
        console.log(file.path)
        console.log(file.content.toString('utf8'))
        resolve(file.content)
        })
        }) 
    })
    var reader = new FileReader();
    let myvalu = ''
    promise.then(file => {
      console.log('File Result : -- '+ file)
      myvalu = file
    }).then(function(){
      let key =username
      let buf = myvalu.toString()
      const decrypted = CryptoJS.AES.decrypt(buf, key).toString(CryptoJS.enc.Latin1);  //File Decryption CryptoJs Library
      var blob = new Blob( [ decrypted ], { type: 'text/plain' } );
      console.log('NN'+blob)
      console.log('File Result 2 : -- '+ myvalu)
      console.log('Decy '+decrypted)
      FileSaver.saveAs(decrypted,'filename.jpg');   //Saving File As Image Jpeg
    })    
  }
    return (
      <div  style={{
        padding:'15.567%',
        height:'50%',
        background: `url(https://wallpaperaccess.com/full/1267583.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `center`}}>
        <div>
        </div>

        <div style={{marginBottom: '30px' , variant : "outlined",marginLeft:'500px'}} > <h2 style={{font: ' small-caps bold 12px/30px Georgia serif' , fontSize: '25px'}}>Student Page </h2>
        <h3 style={{font: ' small-caps bold 12px/30px Georgia serif' , fontSize: '20px'}}>Enter Ipfs Hash </h3>
        <br></br>

          <TextField
            id="standard-basic"
            type="password"
            autoComplete="on"
            style = {{width: 400}}
            label='Enter Password'
            variant="outlined" 
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="password"
            label='Enter IPFS HASH'
            variant="outlined" 
            style = {{width: 400}}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
            required
          />
          <br /><br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="20px"

            disabled={username == '' && password == ''}
            onClick={test}
          >
            Download
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p></p>
        </div>
      </div>
    );
}


export default Studentpage