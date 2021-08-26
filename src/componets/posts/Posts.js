export default function Posts({item}) {
  return (
    <div>
        {item.map(value => <div>{value.title}</div>)}

    </div>
  );
}