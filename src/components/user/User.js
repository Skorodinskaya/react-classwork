import Posts from "../posts/Posts";

export default function User({item}) {

    return (
        <div>
            <h1>{item.id} - {item.name} - {item.username}</h1>
            <Posts id={item.id}/>
        </div>
    );
}
