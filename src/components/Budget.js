import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value <20001){
            
            setNewBudget(event.target.value);
        }else{
            alert("max budget = 20,000")
        setNewBudget(20000);}
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{newBudget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

