export default function User({item, chooseUser}) {
    const BtnForUser = () => {
        chooseUser(item)
    };
    return (
        <div>
            {item.id}. {item.username}
            <button onClick={BtnForUser}>Details</button>
        </div>
    );
}