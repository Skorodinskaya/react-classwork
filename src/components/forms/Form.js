import {useState} from "react";
import {postCar} from "../services/api.service";
import Cars from "../cars/Cars";

export default function Form() {
    const [space, setSpace] = useState({model: '', price: '', year: ''})
    let onChangeForm = (e) => {
        setSpace({...space, [e.target.name]: e.target.value})
    };
    let save = (e) => {
        e.preventDefault();
        postCar(space)
    };
    return (
        <div>
            <form onSubmit={save}>
                <input type={'text'} name='model' value={space.model} onChange={onChangeForm} maxLength={20}/>
                <input type={'number'} name ='price' value={space.price} onChange={onChangeForm} min={1}/>
                <input type={'number'} name ='year' value={space.year} onChange={onChangeForm} min ={1990} max={2021}/>
                <input type={'submit'}/>
            </form>
            <Cars/>
        </div>
    );
}