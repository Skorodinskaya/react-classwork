import {addCar} from "../services/car.api.service";
import {useState} from "react";
import Cars from "../components/cars/Cars";

export default function () {
    const [createCar, setcreateCar] = useState({model: '', price: '', year: ''})

    const onFormInputCreate = (e) => {
        setcreateCar({...createCar, [e.target.name]: e.target.value})
    }
    const create = (e) => {
        e.preventDefault();
        addCar(createCar)
    }

    return (
        <div>
            <form onSubmit={create}>
                <input type="text" name={'model'} value={createCar.model} onInput={onFormInputCreate}/>
                <input type="number" name={'price'} value={createCar.price} onInput={onFormInputCreate}/>
                <input type="number" name={'year'} value={createCar.year} onInput={onFormInputCreate}/>
                <input type={"submit"}/>

                <Cars/>
            </form>

        </div>
    );
}