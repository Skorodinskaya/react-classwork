import Address from "../address/Address";
import Company from "../company/Company";

export default function User({id, name, username, email, phone, address, company}) {
    return (
        <div>
            <h2>{id}. {name} - {username}</h2>
            <ul>
                <li>{email}</li>
                <li>{phone}</li>
                <li><Address {...address}/></li>
                <li><Company {...company}/></li>
            </ul>
        </div>
    );
}
