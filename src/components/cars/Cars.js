import {useEffect, useState} from "react";
import {getCars} from "../services/api.service";
import Car from "./Car";

export default function Cars() {
  const [cars, setCars] = useState([])
  useEffect(()=> {
    getCars().then(value => setCars([...value]))
  }, [])
  return (
    <div>
      {cars.map(value => <Car item={value} key = {value.id}/>)}

    </div>
  );
}