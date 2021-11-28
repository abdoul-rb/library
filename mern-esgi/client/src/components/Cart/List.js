import React, { useEffect, useState } from "react";
import Button from "../lib/Button";
import Modal from "../lib/Modal";
import Form from "./Form";

const data = [
  { id: 1, name: "plate", unitPrice: 1, quantity: 3 },
  { id: 2, name: "spoon", unitPrice: 1, quantity: 3 },
];

export default function List({ theme }) {
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    //fetch()
    //.then(data =>
    setList(data);
    //);
  }, []);

  const addElement = async (item) => {
    //localStorage.set("list", JSON.stringify([...list, item]))
    setList([...list, item]);
    setModal(false);
    //)
  };

  const deleteElement = async (item) => {
    //localStorage.set("list", JSON.stringify([...list, item]))
    setList(list.filter((_it) => _it.id !== item.id));
    //)
  };

  const editElement = async (item) => {
    //localStorage.set("list", JSON.stringify([...list, item]))
    setList(list.map((_it) => (_it.id !== item.id ? _it : item)));
    //)
  };

  const onSubmit = (values) => {
    if (modal === true) {
      addElement(values);
    } else {
      editElement(values);
    }
  };
  const totalPrice = list.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  );
  const createTransaction = () => {
    const data = {
      cart: list,
      totalPrice,
      currency: "EUR",
      consumer: {
        lastname: "Foo",
        firstname: "Bart",
      },
      shippingAddress: {
        address: "1 rue Bouvier",
        zipCode: 75011,
        city: "Paris",
        country: "France",
      },
      billingAddress: {
        address: "1 rue Bouvier",
        zipCode: 75011,
        city: "Paris",
        country: "France",
      },
    };

    fetch("http://localhost:3001/transactions", {
      method: "POST",
      headers: {
        Authorization: "BASIC " + localStorage.getItem("credentials"), // base64("username:password")
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Button
        theme={theme}
        title="add product"
        onClick={() => setModal(true)}
      />
      <Modal
        theme={theme}
        title="Add Product"
        open={modal}
        onClose={() => setModal(false)}
      >
        <Form onSubmit={onSubmit} selectedValue={modal} />
      </Modal>
      <ul>
        {list.map((item, index) => (
          <li key={item.id}>
            {item.name} {item.unitPrice} {item.quantity}
            <Button
              theme={theme}
              title="delete"
              onClick={() => deleteElement(item)}
            />
            <Button theme={theme} title="edit" onClick={() => setModal(item)} />
          </li>
        ))}
      </ul>
      <p>Total price: {totalPrice}</p>
      <Button title="createTransaction" onClick={() => createTransaction()} />
    </div>
  );
}
