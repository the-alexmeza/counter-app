import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({ counters, onReset, onDelete, onIncrement }) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
        ></Counter>
      ))}
    </div>
  );
};

export default Counters;
