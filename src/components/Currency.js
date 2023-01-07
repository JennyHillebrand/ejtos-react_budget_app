import React, { useState } from 'react';
// import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { currency, setCurrency } = useState('£ Pound');

//	const totalExpenses = expenses.reduce((total, item) => {
//		return (total += item.cost);
//	}, 0);

	return (
		<div className='alert alert-success' style={{color:"white"}}>
			<span>Currency: {currency}</span>
		 
        <select className="custom-select"style={{backgroundColor:"green", color:"white"}} id="currencySelect" onChange={(event) => setCurrency(event.target.value)}>
            <option defaultValue>£ Pound</option>
            <option value="$ Dollar" name="dollar"> $ Dollar</option>
            <option value="€ Euro" name="euro"> € Euro</option>
            <option value="₹ Rupee" name="rupee"> ₹ Rupee</option>
        </select>
        </div>
	);
};

export default Currency;
