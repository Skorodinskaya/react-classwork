import {useEffect, useState} from "react";
import {deleteCar, editCar, getCars} from "../../services/car.api.service";
import Car from "../car/Car";

export default function Cars({setFormState}) {
    let [car, setCar] = useState([]);

    useEffect(() => {
        getCars().then(value => setCar([...value]))
    })
    const deleteBtn = (id) => {
        deleteCar(id)
    }

    return (
        <div>
            <div> {car.map(value => <Car item={value} key={value.id} setFormState={setFormState} deleteBtn={deleteBtn}/>)}</div>
        </div>
    );
}