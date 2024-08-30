import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import Items from "./Items";
import { useState } from "react";
import { nanoid } from "nanoid";

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const App = () => {
  const defaultList = JSON.parse(localStorage.getItem('list') || '[]')
  const [items, setItems] = useState(defaultList);

  // adding the item to the list
  const addItem = async (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid()
    }
    const newList = [...items, newItem]
    await setItems(newList);
    setLocalStorage(newList);
    console.log(items);
    toast.success("item is added to the list")
  }
  // deleting the item form the list
  const deleteItem = (itemId) => {
    const newList = items.filter((curr) => itemId !== curr.id)
    setItems(newList);
    setLocalStorage(newList);
    toast.success("item deleted")
  }
  // updating the item from the list
  const updateList = (id) => {
    const newList = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      } else {
        return item
      }
    })
    setItems(newList);
    setLocalStorage(newList);
  }

  return <section className="section-center">
    <ToastContainer position="top-center" />
    <Form addItem={addItem} />
    <Items items={items} deleteItem={deleteItem} updateList={updateList} />
    <ToastContainer position="top-center" />
  </section>;
};

export default App;
