import { useState } from "react";

const Hello = () => {
  const [value, setValue] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const toggle = () => value === "hello" && setVisible((prev) => !prev);
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="search"
        type="text"
      />
      <button onClick={toggle} id="toggle">
        Hello
      </button>
      {visible && <h1 id="hello">Hello</h1>}
    </div>
  );
};

export default Hello;
