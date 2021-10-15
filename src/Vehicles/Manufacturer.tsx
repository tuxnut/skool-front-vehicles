import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModelList from './ModelList';

function ManufacturerItem(props: { name: string }) {
    const [manufacturerInfo, setManufacturerInfo] = useState(undefined);

    useEffect(() => {
        const fetchInfoForManufacturer = async () => {
            const result = await axios(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/${props.name}?format=json`);
            // console.log(result.data);
            setManufacturerInfo((result.data as any).Results[0]);
        };

        fetchInfoForManufacturer();
    }, [props.name]);

    return (
        <div className="fixed">
            <h2>{props.name}</h2>
            {manufacturerInfo && (
                <div>
                    <p>Address: {(manufacturerInfo as any).Address}</p>
                    <p>City: {(manufacturerInfo as any).City}</p>
                    <p>Country: {(manufacturerInfo as any).Country}</p>
                    <img
                        src={`https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/${props.name.toLowerCase()}.png`}
                        alt={props.name}
                        width="100"
                    />
                    <h4>Types of vehicles:</h4>
                    <ul>
                        {(manufacturerInfo as any).VehicleTypes.map((vehicleType: { Name: string }) => (
                            <li>{vehicleType.Name}</li>
                        ))}
                    </ul>
                    <h4>Models:</h4>
                    <ModelList manufacturer={props.name} />
                </div>
            )}
        </div>
    );
}

export default ManufacturerItem;
