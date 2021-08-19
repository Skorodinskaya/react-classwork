import {useEffect, useState} from "react";
import {getCars} from "../../services/car.api.service";
import Car from "../car/Car";

export default function Cars() {
    let [cars, setCars] = useState([]);
    useEffect(()=> {
        getCars().then(value => setCars([...value]))
    }, [cars])
    return (
        <div>
            {cars.map(value => <Car item={value} key = {value.id}/>)}

        </div>
    );
}