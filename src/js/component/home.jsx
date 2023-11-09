import React, { useState } from "react";
import SecondsCounter from "./counter.jsx";

//create your first component
const Home = () => {
	const[Counter,setCounter] = useState(0)
	useState(()=>{const interval = setInterval(()=>{setCounter(counter=> counter+1)},1000)
	
	
	return ()=> clearInterval(interval)
},[])
	const regresiva = () => (setCounter(counter=> counter-1),1000)

	return (
		<div>
			<SecondsCounter Seconds={Counter}></SecondsCounter>
			<button
        type="button"
        className="btn btn-secondary m-3"
        onClick={() => {regresiva}}
      >
        regresiva
      </button>
		</div>
	)
};

export default Home;