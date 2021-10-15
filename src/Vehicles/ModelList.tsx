import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ModelList(props: { manufacturer: string }) {
    const [models, setModels] = useState([]);

    useEffect(() => {
        const fetchModelForManufacturer = async () => {
            const result = await axios(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${props.manufacturer}?format=json`);
            console.log(result);
            const data = (result.data as any).Results.map((rawModel: { Model_Name: string }) => rawModel.Model_Name);
            setModels(data);
        };

        fetchModelForManufacturer();
    }, [props.manufacturer]);

    return (
        <ul>
            {models.map((modelName: string) => (
                <li>{modelName}</li>
            ))}
        </ul>
    );
}

export default ModelList;
