import React, { useState } from 'react';

function Counter() {
  // State for the counter value
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

//   const multiply_by_2 = () =>{
//     setCounter(counter*2);
//   }

  
  const ele = ()=>{
      const array = ["go", "keep", "dumb"];

    for(let i=0; i<array.length; i++){
        setCounter(array[i]);
    }
  }

  

  return (
    <div>
      <h1>Counter Example</h1>
      <p>{counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={ele}>add_array</button>
    </div>
  );
}

export default Counter;