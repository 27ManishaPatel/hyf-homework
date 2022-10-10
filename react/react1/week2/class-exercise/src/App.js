import React, {useState} from 'react';
import './Counter.css';


function App() {
  const [count, setCount] = useState(0);
  return (
      <div className='counter'>
        <h1>COUNTER</h1>
        <button onClick={() =>  setCount(count + 1) }>Click </button>
        <h3>{count}</h3>
      </div>
  );
}

export default App;
