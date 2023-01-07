import React, { useState } from 'react';
// import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { currency, setCurrency } = useState();

//	const totalExpenses = expenses.reduce((total, item) => {
//		return (total += item.cost);
//	}, 0);

	return (
		<div className='alert alert-success'>
			<span>Currency: {currency}</span>
		 
        <select className="custom-select" id="currencySelect" onChange={(event) => setCurrency(event.target.value)}>
            <option defaultValue>{currency}</option>
            <option value="$ Dollar" name="dollar"> $ Dollar</option>
            <option value="Pound" name="pound"> Pound</option>
            <option value="Euro" name="euro"> Euro</option>
            <option value="Rupee" name="rupee"> Rupee</option>
        </select>
        </div>
	);
};

export default Currency;
