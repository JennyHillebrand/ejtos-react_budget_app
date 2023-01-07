import React, {useContext, dispatch } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
//	const { budget } = useContext(AppContext);
 //   const [budget, setBudget] = useState('');
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);


const blurEvent = (inputbudget) => {
    if (inputbudget==="" || isNaN(inputbudget)){
        window.alert("Please enter a number");
        return;}
    if (inputbudget > 20000){
        alert("The budget may not exceed 20 000");
        return;
    }
    if (inputbudget < totalExpenses){
        alert("The budget must not be less than expenses");
        return;
    }

 //   setBudget(inputbudget);
    dispatch({
        type: 'SET_BUDGET',
        payload: inputbudget,
    });
    }


	return (
		<div className='alert alert-secondary'>
            <span>Budget: </span> 
            <span> {currency}</span>
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
