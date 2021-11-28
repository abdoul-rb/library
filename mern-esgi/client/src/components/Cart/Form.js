import React, { useState } from "react";
import Button from "../lib/Button";

export default function Form({ onSubmit, selectedValue }) {
  const [values, setValues] = useState(
    selectedValue === true
      ? {
          name: "",
          quantity: 0,
          unitPrice: 0,
        }
      : selectedValue
  );

  const _onSubmit = (event) => {
    event.preventDefault();
    // Vanilla JS approch
    //const newData = new FormData(event.target);
    //const values = newData.entries.reduce((acc, [key, value]) => {
    //  acc[key] = value;
    //  return acc;
    //}, {});
    if (selectedValue) onSubmit(values);
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={_onSubmit}>
      <input value={values.name} onChange={handleChange} name="name" />
      <input
        value={values.unitPrice}
        onChange={handleChange}
        name="unitPrice"
        type="number"
      />
      <input
        value={values.quantity}
        onChange={handleChange}
        name="quantity"
        type="number"
      />
      <Button title="Submit" />
    </form>
  );
}
