import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budgetLimit, expenses, currency } = useContext(AppContext);
  const { dispatch, budget } = useContext(AppContext);

  const [ inputBudget, setInputBudget ] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
  }, 0);

  const handleInputChange = (e) => {

    // set a new timeout to check the input value after 2 seconds
    if (e.target.value > budgetLimit) {
      window.alert(`Please enter a value less than or equal to the budget limit(${currency} ${budgetLimit}).`);
      setInputBudget('');
    } else if (e.target.value < totalExpenses) {
      window.alert(`Please enter a value more than or equal to the budget limit(${currency} ${totalExpenses}).`);
      setInputBudget('');
    } else {
      dispatch({
        type: 'SET_BUDGET',
        payload: e.target.value
      })
    }
  };

  return (
    <div className='alert alert-secondary'>
      Budget: {currency} 
      <input type='number' 
        // min={totalExpenses} 
        // max={budgetLimit}
        onChange={handleInputChange}
        value={inputBudget}
        defaultValue={totalExpenses}
        placeholder={totalExpenses}
        onInput={(e)=> setInputBudget(e.target.value)}
      />
    </div>
  );
};

export default Budget;
