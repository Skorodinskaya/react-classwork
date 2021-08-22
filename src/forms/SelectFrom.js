import {addCar, editCar, getCars} from "../services/car.api.service";
import {useEffect, useState} from "react";

export default function SelectForm() {
    const [cars, setCars] = useState([]);
    const [selectCar, setSelectCar] = useState({model: '', price: '', year: ''})

    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, [cars])

    const chooseCar = (e) => {
        const chosenCar = cars.find(car => car.id === +e.target.value)
        setSelectCar(chosenCar)
    }

    const onFormInputChange = (e) => setSelectCar({...selectCar, [e.target.name]: e.target.value});

    const save = (ev) => {
        ev.preventDefault();
        selectCar.id
            ? editCar(selectCar)
            : addCar(selectCar)
    }

    return (
        <div>
            <form onSubmit={save}>
                <input type="text" name={'model'} value={selectCar.model} onChange={onFormInputChange} maxLength={20}/>
                <input type="number" name={'price'} value={selectCar.price} onChange={onFormInputChange} min={1}/>
                <input type="number" name={'year'} value={selectCar.year} onChange={onFormInputChange} min={1990}
                       max={2021}/>
                <input type="submit"/>
            </form>
            <form onChange={chooseCar}>
                <select>
                    {
                        cars.map(item => <option key={item.id}
                                                 value={item.id}>{item.model} - {item.price} - {item.year}</option>)
                    }
                </select>
            </form>
        </div>
    );
}
