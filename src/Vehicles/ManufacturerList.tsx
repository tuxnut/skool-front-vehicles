import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Manufacturer from './Manufacturer';
import logo from '../img/logo.svg';
import SearchBar from 'material-ui-search-bar';

function ManufacturerList() {
    const [manufacturers, setManufacturers] = useState([]);
    const [manufacturerIdx, setManufacturerIdx] = useState(-1);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const fetchManufacturers = async () => {
            const result = await axios('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json');

            const manufacturerNames: string[] = (result.data as any).Results.map(
                (rawManufacturer: { Make_ID: number; Make_Name: string }) => rawManufacturer.Make_Name,
            );

            setManufacturers(manufacturerNames as any);
        };
        fetchManufacturers();
    }, []);

    return (
        <div className="container">
            <div className={'list-container'}>
                {manufacturers.length > 1 ? (
                    <ul className="left-list">
                        {manufacturers.map((manufacturerName: string, index: number) => (
                            <li onClick={() => setManufacturerIdx(index)}>{manufacturerName}</li>
                        ))}
                    </ul>
                ) : (
                    <img src={logo} className="App-log/o" alt="logo" />
                )}
            </div>
            {manufacturerIdx !== -1 && <Manufacturer name={manufacturers[manufacturerIdx]} />}
            {/* <SearchBar value={searchText} onChange={(newValue: string) => setSearchText(newValue)} onRequestSearch={() => {}} /> */}
        </div>
    );
}

export default ManufacturerList;
