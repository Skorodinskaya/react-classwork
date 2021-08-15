export default function Company({name, catchPhrase, bs}) {
    return (
        <div>
            Company:
            <ul>
                <li>{name}</li>
                <li>{catchPhrase}</li>
                <li>{bs}</li>
            </ul>
        </div>
    );
}
