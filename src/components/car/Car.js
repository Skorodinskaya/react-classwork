export default function Car({item, deleteBtn, setFormState}) {
const deleteButton = () => {
    deleteBtn(item.id)
}
const editButton = () => {
    setFormState(item)
}

  return (
    <div>
      {item.id}. Model - {item.model}. Price - {item.price}. Year - {item.year}
      <button onClick={deleteButton}>Delete</button>
      <button onClick={editButton}>Edit</button>
    </div>
  );
}