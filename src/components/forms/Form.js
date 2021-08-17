import Cars from "../cars/Cars";
import {useState} from "react";
import {createCar, editCar} from "../../services/car.api.service";

export default function Form() {
    let [formState, setFormState] = useState({model: '', price: '', year: ''});
    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };
    let submit = (e) => {
        e.preventDefault()
        formState.id
            ? editCar(formState)
            : createCar(formState)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name={'model'} value={formState.model} maxLength={20} onInput={onFormInputChange}/>
                <input type="number" name={'price'} value={formState.price} min={0} onInput={onFormInputChange}/>
                <input type="number" name={'year'} value={formState.year} min={1990} max={2021}
                       onInput={onFormInputChange}/>
                <input type="submit"/>
            </form>

            <Cars setFormState={setFormState}/>
        </div>
    );
}