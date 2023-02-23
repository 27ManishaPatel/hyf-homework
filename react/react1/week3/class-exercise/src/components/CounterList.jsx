import { useState } from 'react';

import Counter from './Counter';

const counters = [
  { id: '1', limit: 5 },
  { id: '2'}
];

export default function CounterList (){
  const [counterList, setCounterList] = useState(counters);
  const [paused, setPaused] = useState(false);
  const [limit, setLimit ] = useState(10)

    function addCounter() {
        setCounterList(counterList.concat([{
            id: Date.now(),
            limit: limit 
        }]));
        // console.log(counters);
    }

  function deleteCounter(deleteId) {
    setCounterList(counterList.filter(({ id }) => id !== deleteId));
  }

  return (
    <>
    <input type="number"
    value={limit}
    onChange={(e)=> setLimit(e.target.value)}
    ></input>
      <button onClick={addCounter} >Add counter!</button>
      <button onClick={() => setPaused(!paused)}>{paused ? 'Play' : 'Pause'}</button>
      <ul>
        {counterList.map(({ limit, id }) => <Counter limit={limit} key={id} paused={paused}
          onDelete={() => deleteCounter(id)}
          />
        )} 
      </ul>
    </>
  )
}
