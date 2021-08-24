import Cars from "../cars/Cars";
import {useState} from "react";
import {postCar} from "../services/api.service";

export default function Form() {
    const [formState, setFormState] = useState({model: '', price: '', year: ''})

    let onChangeForm = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    };
    let save = (e) => {
        e.preventDefault()
        postCar(formState)
    };
    return (
        <div>
            <form onSubmit={save}>
                <input type={'text'} name={'model'} value={formState.model} onChange={onChangeForm}/>
                <input type={'number'} name={'price'} value={formState.price} onChange={onChangeForm}/>
                <input type={'number'} name={'year'} value={formState.year} onChange={onChangeForm}/>
                <input type={'submit'}/>
            </form>
            <Cars/>
        </div>
    );
}