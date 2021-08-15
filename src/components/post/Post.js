import Comments from "../comments/Comments";

export default function Post({ item }) {
    return (
        <div>
            --- {item.title}
            <Comments id={item.id}/>
        </div>
    );
}
