const url = 'http://91.201.233.14/api/v1/cars'

const getCars = () => {
    return fetch(url)
        .then(value => value.json())
}

const postCar = (car) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(value => value.json())
        .then(value => console.log(value))
}


export {getCars, postCar}