import React from "react";
import Button from "./lib/Button";

function ItemShow({ theme }) {
  return (
    <div>
      Item #1
      <Button
        theme={theme}
        title="Delete"
        onClick={() => alert("item deleted")}
      />
    </div>
  );
}

export default ItemShow;
