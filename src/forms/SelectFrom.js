import {getCars} from "../services/car.api.service";
import {useEffect, useState} from "react";

export default function SelectForm() {
    const [selectCar, setSelectCar] = useState({model: '', price: '', year: ''})
    useEffect(() => {
    getCars().then(value => setSelectCar({...value}))
    })
    return (
        <div>
            <select>
                {/*<option value={}>{selectCar}</option>*/}
                {/*<option value="">1</option>*/}
                {/*<option value="">1</option>*/}
                {/*<option value="">1</option>*/}
                {/*<option value="">1</option>*/}
            </select>


        </div>
    );
}