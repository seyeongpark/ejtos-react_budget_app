import React, { useState, useContext } from 'react';
import { Dropdown } from "react-bootstrap";
import { AppContext } from '../context/AppContext';
import { UncontrolledButtonDropdown,DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const Currency = () => {
  const currencyList = [
    { name: "Dollar", symbol: "$" },
    { name: "Pound", symbol: "£" },
    { name: "Euro", symbol: "€" },
    { name: "Ruppee", symbol: "₹" },
  ]; 
  const [inputCurrency, setInputCurrency] = useState({ name: 'Pound', symbol: '£'});

  const { dispatch } = useContext(AppContext);
  const handleCurrency = (currency) => {
    setInputCurrency(currency)

    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency.symbol
    })
  }

  return (
    <div>
      <UncontrolledButtonDropdown>
      <Dropdown>
        <DropdownToggle color='success' className="alert alert-success" caret>
          Currency ({inputCurrency.symbol} {inputCurrency.name})
        </DropdownToggle>
        <DropdownMenu className="alert alert-success">
          {currencyList.map((currency) => (
            <DropdownItem
              value={currency.symbol}
              onClick={() => handleCurrency(currency)}
            >
              {`${currency.symbol} ${currency.name}`}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      </UncontrolledButtonDropdown>
    </div>
  );
};

export default Currency;
