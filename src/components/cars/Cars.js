import {useEffect, useState} from "react";
import {deleteCar, getCars} from "../services/api.service";
import Car from "./Car";

export default function Cars({editBtn}) {
  const [cars, setCars] = useState([])
  useEffect(()=> {
    getCars().then(value => setCars([...value]))
  }, [])
  const deleteBtn = (id) => {
    deleteCar(id)
  }
  return (
    <div>
      {cars.map(value => <Car item={value} key = {value.id} deleteBtn={deleteBtn} editBtn={editBtn}/>)}

    </div>
  );
}