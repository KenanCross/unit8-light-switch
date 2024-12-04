import './Switch.css';
import React, { useState } from 'react';

const Switch = () => {
	const [toggle, setToggle] = useState(false);
	const toggleSwitch = () => {
		setToggle(!toggle);
	};
	return (
		<div className={toggle ? 'Switch' : 'Switch on'}>
			<h2>Switch</h2>
			<h3>{toggle ? 'Off' : 'On'}</h3>
			<button onClick={toggleSwitch}>Turn {toggle ? 'Off' : 'On'}</button>
		</div>
	);
};

export default Switch;
