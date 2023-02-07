import "./App.css";

import React, { useState } from "react";

import Child from "./Child";

function App() {
  const [item, setItem] = useState({ width: 20, isEnabled: true, car:"saab" });

  const UpdateItem = (name, val) =>
  {
    setItem((prevState) => ({
      ...prevState,
      [name]: val,
    }));
    console.log(`Parent: ${name} --> ${val}`);
  }

  return (
    <>
      <div>
        <Child item={item} updateItem={UpdateItem} />
      </div>
      <hr/>
      <div>
        <label>Parent width  : {item.width}</label>
        <p/>
        <label>Parent enabled: {item.isEnabled.toString()}</label>
        <p/>
        <label>Parent car: {item.car}</label>
      </div>
    </>
  );
}

export default App;
