import React from 'react'
import { useNavigate } from "react-router-dom";

function Ipfsupload() {
	const history = useNavigate();
	const home = () => {
		history.push("/");
	}
	return (
		<div>Hello</div>
	)
}

export default Ipfsupload
