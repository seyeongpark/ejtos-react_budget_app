import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { AppContext } from '../context/AppContext';
        
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    
    const changeAllocation = (type, name) => {
        const amount = type === 'increase' ? 10 : (type === 'decrease' && props.cost > 0) ? -10 : 0;

        const expense = {
            name: name,
            cost: amount
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency} {props.cost}</td>
        <td>
            <AiFillPlusCircle
                size="2em"
                color="green"
                onClick={event=> changeAllocation('increase', props.name)}
            />
        </td>
        <td>
            <AiFillMinusCircle
                size="2em"
                color="red"
                onClick={event=> changeAllocation('decrease', props.name)}
            />
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;