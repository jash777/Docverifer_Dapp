import React from "react";
import './css/logo.png'
import styled from 'styled-components'
import bg from './css/Landing_png.png'
function Homepage(){

  console.log(bg)

    return(
      <div style={{
        padding:'20.09%',
        height:'50%',
        fontColor:'Red',
        background: `url(https://wallpaperaccess.com/full/1267583.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `center`}}>

<p className="box" style={{font: ' small-caps bold 12px/30px Georgia serif'}}> <h5 style={{textAlign: 'justify' , fontFamily:"Times New Roman", Times: 'serif', fontSize: '25px',  textAlign: 'center' }}>    Welcome To DocVerify a  Document Verification App     Based on Blockchain Technology  and  Dcentralized Storage </h5> <br></br> <h6></h6> </p>


        </div>
   

    );
}
export default Homepage;