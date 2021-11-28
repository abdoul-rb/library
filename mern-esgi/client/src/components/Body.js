import React, { useState, useEffect } from "react";
import List from "./Cart/List";
import ItemShow from "./ItemShow";
import Button from "./lib/Button";
import Modal from "./lib/Modal";

function Body({ theme }) {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log("modal updated", modal, theme);
    return () => {
      console.log("will Update", modal, theme);
    };
  }, [modal, theme]);

  useEffect(() => {
    console.log("modal updated", modal);
    return () => {
      console.log("will Update", modal);
    };
  }, [modal]);

  useEffect(() => {
    console.log("did mount");
    return () => {
      console.log("will unmount");
    };
  }, []);

  return (
    <>
      <ItemShow theme={theme} />
      <List theme={theme} />
      <Button title="open modal" onClick={() => setModal(true)} />
      <Modal
        theme={theme}
        title="ma modal"
        open={modal}
        onClose={() => setModal(false)}
      >
        <form>
          <input />
          <input />
          <input />
        </form>
      </Modal>
    </>
  );
}

export default Body;
