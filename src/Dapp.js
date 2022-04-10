import React , {Component} from 'react';
import Web3 from 'web3'
import Navbar from './Components/Navbar'
import SignupPage from "./Components/SignupPage";
import Studentpage from './Components/Studentpage';
import Verifierpage from './Components/Verifierpage';
import Homepage from'./Components/Homepage';
import Report from'./Components/Report';
import Dashboard from './Components/Dashboard';
import Loginpage from './Components/Loginpage';
import FileEncryption from "./FileEncryption";
import './Components/css/style.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'




class Dapp extends Component  {




render () {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      
<a className="navbar-brand text-white" href="/">DocVeifier</a>
<button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mr-auto">
<li className="nav-item  text-white">
<Link className='nav-link text-white' to='/'>Home <span className="sr-only">(current)</span> </Link>
</li>
<li className="nav-item  text-white">
<Link className='nav-link text-white' to='SignupPage'>Institute <span className="sr-only">(current)</span> </Link>
</li>
<li className="nav-item  text-white">
<Link className='nav-link text-white' to='Verifierpage'>Verifier  <span className="sr-only">(current)</span> </Link>
</li>
<li className="nav-item  text-white">
<Link className='nav-link text-white' to='Studentpage'>Student <span className="sr-only">(current)</span> </Link>
</li>
<li className="nav-item  text-white">
<Link className='nav-link text-white' to='Report'>Report <span className="sr-only">(current)</span> </Link>
</li>
<li className="nav-item ">
</li>
</ul>
</div>
</nav>
<Routes>
<Route exact path='/SignupPage' element={<SignupPage/>} />
<Route exact path='/Studentpage' element={<Studentpage/>} />
<Route exact path='/Verifierpage' element={<Verifierpage/>} />
<Route exact path='/' element={<Homepage/>} />
<Route exact path='/Report' element={<Report/>} />
<Route exact path='/Loginpage' element={<Loginpage/>} />
<Route exact path='/Dashboard' element={<Dashboard/>} />

<Route exact path='/FileEncryption' element={<FileEncryption/>} />
</Routes>

</Router>
    
  );
}

  
}

export default Dapp;
