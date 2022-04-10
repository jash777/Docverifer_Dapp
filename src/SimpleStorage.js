// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider
import React, {useState} from 'react'
import {ethers} from 'ethers'
import { create } from 'ipfs-http-client';
import SimpleStorage_abi from './contracts/SimpleStorage_abi.json'
var CryptoJS = require("crypto-js");
const client = create('https://ipfs.infura.io:5001/api/v0')

const SimpleStorage = () => {

	// deploy simple storage contract and paste deployed contract address here. This value is local ganache chain
	let contractAddress = '0x6C57c913040d4Fc97a9208Be3848fe988a25c9FC';

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const [currentContractVal, setCurrentContractVal] = useState(null);

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);

		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);

		let tempContract = new ethers.Contract(contractAddress, SimpleStorage_abi, tempSigner);
		setContract(tempContract);	
	}
	let ipfsHash =  '';

	const setHandler = (event) => {
		event.preventDefault();
		let key = event.target.setText.value
		let file = event.target.setFile.files[0]
		const promise = new Promise((resolve) => {
			const reader = new FileReader()
			reader.onload = function () {
			  let rf = reader.result
			  let ct = CryptoJS.AES.encrypt(rf, key);   // File Encryption usig CryptoJs Library 
			  let ctstr = ct.toString();
			  console.log(rf)
			  let result = ctstr
			  console.log(result)
			  resolve(result)
			}
			reader.readAsDataURL(file)
		  })
	

		  promise.then(file => {
			console.log('File Result : -- '+file)
		  })
		  
		  const print = async()=>{
			const r = await promise;
			const added = await client.add(r)
			const url = `https://ipfs.infura.io/ipfs/${added.path}`
			const hashpath = added.path
			setCurrentContractVal(hashpath)
			ipfsHash = await url
			return url
		}

		

		

	const add = async function(){
		let a = await print()
		console.log("aaa   :"+ a )
		contract.set(a)
		
	}
	add()




	



		console.log("III :--"+ipfsHash)
		console.log(event.target.setFile.files[0])
		console.log('sending ' + event.target.setText.value + ' to the contract');
		
	}

	
	return (
		
		<div>
<div style={{
      width:'100%',
	  height:'593px',
      background: `url(https://wallpaperaccess.com/full/1267583.jpg)`,
      backgroundRepeat: `repeat`,
      backgroundSize: `center`}}  >
      <br></br>      <br></br>    <br></br>   
	  <br></br>

<div class="text-center" ><div>
<button  type="button" class="btn btn-primary btn-lg" onClick={connectWalletHandler}>{connButtonText}</button>
<br></br>				<h3>Address: {defaultAccount}</h3>
</div></div> 

        <form onSubmit={setHandler} >
          <input type='password' id='setText' className="form-control" placeholder="Enter Password" minRows="4" name="text" />
            <br></br>
            <div className="input-group mb-3">
            <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="submit"  id="inputGroupFileAddon03">Button</button>
            </div>
            <div className="custom-file">
            <input type="file" id='setFile'    name='upload_cont_img'       className="custom-file-input"   aria-describedby="inputGroupFileAddon03" />
            <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>       
                      
        	</div>
                  <div className="pt-1 pb-3">
                </div>    
              </div>
              <div id="upload_cont_img"></div>
            <br></br>
			
        </form>
		<div class='text-center'>
		<h4> IPFS HASH  </h4>
		<h3>{currentContractVal}</h3>
		</div>
		
    </div>
	</div>



	);
}

export default SimpleStorage;