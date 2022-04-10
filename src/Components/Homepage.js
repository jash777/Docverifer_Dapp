import React from "react";
import './css/logo.png'
import styled from 'styled-components'
import bg from './css/Landing_png.png'
function Homepage(){

  console.log(bg)

    return(
      <div style={{
        width:'92%',
	      height:'593px',
        fontColor:'Red',
        background: `url(https://wallpaperaccess.com/full/1267583.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `center`}}>
          <div style={{
            position:'relative',
            left:'100px',
            top:'250px',
            fontFamily:"Times New Roman", Times: 'serif', fontSize: '25px',
          }}> 
          Welcome To DocVerify a  Document Verification App     Based on Blockchain Technology  and  Dcentralized Storage 
           <h5 style={{}}>    </h5> <br></br> <h6></h6>

          </div>



        </div>
   

    );
}
export default Homepage;