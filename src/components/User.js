export default function User({item, chooseUser}) {
  const buttonForUser = () => {
    chooseUser(item)
  }
  return (
    <div>
      {item.id}. {item.name}
      <button onClick={buttonForUser}>Details</button>

    </div>
  );
}