import {useEffect, useState} from "react";
import {getCars} from "../../services/car.api.service";
import Car from "../car/Car";

export default function Cars() {
    let [car, setCar] = useState([]);
    useEffect(() => {
        getCars().then(value => setCar([...value]))
    })

  return (
    <div>
        {car.map(value => <Car item={value} key = {value.id}/>)}

    </div>
  );
}