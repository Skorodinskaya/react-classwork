import {postCar} from "../services/api.service";
import Cars from "../cars/Cars";

export default function FormAnotherVariant() {
    const saveCar = (e) => {
        e.preventDefault()
        const carToSave = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value}
        postCar(carToSave)
    }
    return (
        <div>
            <form onSubmit={saveCar}>
                <input type={'text'} name={'model'} placeholder={'model'}/>
                <input type={'number'} name={'price'} placeholder={'price'}/>
                <input type={'number'} name={'year'} placeholder={'year'}/>
                <button>Save</button>
            </form>
            <Cars/>
        </div>
    );
}