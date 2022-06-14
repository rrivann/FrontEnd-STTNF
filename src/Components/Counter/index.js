/* eslint-disable no-const-assign */
import {useEffect, useState} from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('m');
    document.title = `H ${number}`;
  }, [number]);

  console.log('r');

  return (
    <div>
      <p>hasil : {number}</p>
      <button onClick={() => setNumber(number + 1)}>Add</button>
    </div>
  );
};

export default Counter;
