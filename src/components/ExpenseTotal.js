import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);
    const [currency] = useState('£ Pound')
    const currencySymbol=currency.substr(0,1)

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div className='alert alert-primary'>
			<span>Spent so far: {currencySymbol}{totalExpenses}</span>
		</div>
	);
};

export default ExpenseTotal;
