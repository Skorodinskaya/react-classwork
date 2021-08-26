import User from "./User";

export default function Users({item}) {
    return (
        <div>
            {item.map(value =>
                <div>
                    {value.name}
                    <User/>
                </div>)}

        </div>
    );
}