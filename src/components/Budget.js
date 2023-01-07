import React, {useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
//	const { budget } = useContext(AppContext);
    const [budget, setBudget] = useState('');
    const { expenses } = useContext(AppContext);
    const [currency] = useState('£ Pound')
    const currencySymbol=currency.substr(0,1)
 

const blurEvent = (inputbudget) => {
    if (inputbudget==="" || isNaN(inputbudget)){
        window.alert("Please enter a number");
        return;}
    if (inputbudget > 20000){
        alert("The budget may not exceed 20 000");
        return;
    }
    if (inputbudget < expenses){
        alert("The budget must not be less than expenses");
        return;
    }

    setBudget(inputbudget);
    }


	return (
		<div className='alert alert-secondary'>
            <span>Budget: </span> 
            <span> {currencySymbol}</span>
            <input 
                required='required'
				type='number'
				id="inputGroupBudget"
                name='inputbudget'
			//	value={budget}
				style={{size: 10}}
                onBlur={(event) => blurEvent(event.target.value)}>
            </input>   
		</div>
	);
};

export default Budget;
