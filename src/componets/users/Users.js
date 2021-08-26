export default function Users({item}) {
  return (
    <div>
      {item.map(value => <div>{value.name}</div>)}

    </div>
  );
}