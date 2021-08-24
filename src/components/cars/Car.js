export default function Car({item, editBtn, deleteBtn}) {
    const editCarBtn = () => {
        editBtn(item)
    }

    const deleteCarBtn = () => {
        deleteBtn(item.id)
    }
    return (
        <div>
            {item.model}. Price - {item.price}. Year - {item.year}
            <button onClick={editCarBtn}>Edit</button>
            <button onClick={deleteCarBtn}>Delete</button>
        </div>
    );
}