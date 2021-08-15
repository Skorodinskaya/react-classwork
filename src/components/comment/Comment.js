export default function Comment({item, commentBtn}) {
  const onClickComment = () => {
    commentBtn(item)
  }
  return (
    <div>
    Comment:
        {item.id}. {item.body}

      <button onClick={onClickComment}> more info</button>

    </div>
  );
}