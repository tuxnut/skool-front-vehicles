import React, { useState } from 'react';
import logo from './img/logo.svg';
import './style/App.css';
import Name from './Name';
import ShoppingList from './Shopping';
import Counter from './Counter';
import Toggle from './Toggle';
import ManufacturerList from './Vehicles/ManufacturerList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-log/o" alt="logo" /> */}
                {/* <Name /> */}
                {/* <ShoppingList /> */}
                {/* {<Counter />} */}
                {/* {<Toggle />} */}
                {<ManufacturerList />}
            </header>
        </div>
    );
}

export default App;
