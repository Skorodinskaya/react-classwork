import Geo from "../geo/Geo";

export default function Address({street, suite, city, zipcode, geo}) {
    return (
        <div>
            Address:
            <ul>
                <li>Street - {street}, suite - {suite}</li>
                <li>City: {city}</li>
                <li>Zipcode: {zipcode}</li>
                <Geo {...geo}/>
            </ul>
        </div>
    );
}
