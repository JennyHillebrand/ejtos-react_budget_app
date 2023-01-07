import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { dispatch, currency } = useContext(AppContext);
    const changeEvent = (newcurrency) => {
        //setCurrency(newcurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newcurrency,
        });
      //  forceUpdate()
    }
	return (
		<div className='alert alert-success' style={{color:"white"}}>
			<span>Currency: </span>
		 
        <select className="custom-select"style={{backgroundColor:"green", color:"white"}} id="currencySelect" onChange={(event) => changeEvent(event.target.value)}>
            <option defaultValue value="£"> £ Pound</option>
            <option value="$" name="dollar"> $ Dollar</option>
            <option value="€" name="euro"> € Euro</option>
            <option value="₹" name="rupee"> ₹ Rupee</option>
        </select>
        </div>
	);
};

export default Currency;
