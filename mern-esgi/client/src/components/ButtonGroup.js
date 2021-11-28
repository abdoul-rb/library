import React, { useState } from "react";
import Button from "./lib/Button";

function ButtonGroup({ theme }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        theme={theme}
        title={`${visible ? "Hide" : "Display"} Buttons`}
        onClick={() => setVisible(!visible)}
      />
      {visible && (
        <>
          <Button
            theme={theme}
            title="Hello 1"
            onClick={() => console.log("foo")}
          />
          <Button theme={theme} type="submit" title="Hello 2" />
          <Button
            theme={theme}
            title="Hello 3"
            variant="rounded"
            onClick={() => alert("hello")}
          />
          <Button theme={theme} role="navigation" title="Hello 5" />
          <Button theme={theme} title="H" variant="icon" size={50} />
        </>
      )}
    </>
  );
}

export default ButtonGroup;
