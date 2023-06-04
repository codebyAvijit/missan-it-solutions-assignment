import React, { useState } from "react";
import "./MainComp.css";
import data from "../Extras/data.json";
const MainComp = () => {
  const [dataVal, setDataVal] = useState("");
  const [views, setViews] = useState([]);
  const [errors, setErrors] = useState("");
  const changeDataHandler = (e) => {
    setViews([]);
    setDataVal(e.target.value);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    // console.log(dataVal);
    const display = data.filter((items) => {
      return items.category.toLowerCase().includes(dataVal.toLowerCase());
    });
    // console.log(display);
    if (display.length === 0) {
      setErrors(`Category Doest Not Exist`);
    } else {
      setErrors("");
      setViews(display);
    }
  };
  return (
    <div className="container">
      <h1>Welcome to MyStore</h1>
      <h3>Search Products on the basis of follwing Categories</h3>
      <ul type="none">
        <li>1. Sports</li>
        <li>2. Eatables</li>
        <li>3. Footwear</li>
        <li>4. Computer</li>
        <li>5. Wearables</li>
      </ul>
      <div className="data-comps">
        <input
          type="text"
          value={dataVal}
          name="dataval"
          placeholder="Enter Your Search"
          onChange={changeDataHandler}
        />
        <button type="button" id="btn" onClick={searchHandler}>
          Search
        </button>
      </div>
      <p
        style={{
          color: "red",
          background: "black",
          width: "500px",
          marginLeft: "120px",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        List of Available Items
      </p>
      <div className="json-data">
        {views.length > 0 &&
          views.map((items) => {
            return <div key={items.id}>{items.name}</div>;
          })}
        {views.length === 0 &&
          !errors &&
          data.map((items) => {
            return <div key={items.id}>{items.name}</div>;
          })}
        {errors && <p style={{ color: "red" }}>{errors}</p>}
      </div>
    </div>
  );
};

export default MainComp;
