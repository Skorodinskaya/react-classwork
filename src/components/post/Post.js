import Comments from "../comments/Comments";

export default function Post({item, postBtn}) {
const onClickPostBtn = () => {
    postBtn(item)
}
  return (
    <div>
    Post:
      {item.id}. {item.title}

        <button onClick={onClickPostBtn}>details</button>

        <Comments id = {item.id}/>
    </div>
  );
}