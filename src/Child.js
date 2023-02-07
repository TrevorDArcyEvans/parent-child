import React, { useEffect, useState } from "react";

function Child(props) {
  const [item, setItem] = useState(props.item);

  const OnChangeValue = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // old value as setItem runs async
    console.log(`Child value: ${item[name]}`);

    // value from UI
    console.log(`  ${value}`);
  };

  const OnChangeChecked = (e) => {
    const { name, checked } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: checked,
    }));

    // old value as setItem runs async
    console.log(`Child check: ${item[name]}`);

    // value from UI
    console.log(`  ${checked}`);
  };

  // useEffect will be called after setItem has run
  // NOTE:  we filter on each dependency so we are only dealing with one change at a time

  useEffect(() => {
    console.log(`Child useEffect (width): ${JSON.stringify(item)}`);

    props.updateItem("width", item.width);
  }, [item.width]);

  useEffect(() => {
    console.log(`Child useEffect (isEnabled): ${JSON.stringify(item)}`);

    props.updateItem("isEnabled", item.isEnabled);
  }, [item.isEnabled]);

  useEffect(() => {
    console.log(`Child useEffect (car): ${JSON.stringify(item)}`);

    props.updateItem("car", item.car);
  }, [item.car]);

  return (
    <>
      <label htmlFor="width">Width (between 1 and 50):</label>
      <input type="number" id="width" min="1" max="50" name="width" value={item.width} onChange={OnChangeValue}></input>
      <p />
      <label htmlFor="isEnabled">Enabled:</label>
      <input type="checkbox" id="isEnabled" name="isEnabled" checked={item.isEnabled} onChange={OnChangeChecked}></input>
      <p />
      <label htmlFor="cars">Car:</label>
      <select id="car" name="car" value={item.car} onChange={OnChangeValue}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="holden">Holden</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>{" "}
    </>
  );
}

export default Child;
