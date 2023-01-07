import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
	const { expenses, budget } = useContext(AppContext);
    const [currency] = useState('£ Pound')
    const currencySymbol=currency.substr(0,1)

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert ${alertType}`}>
			<span>Remaining: {currencySymbol}{budget - totalExpenses}</span>
		</div>
	);
};

export default Remaining;
