import React from 'react'

import{useEffect, useState} from 'react';

function Timer() {
    const [count, setCount]=useState(0)
    useEffect(() => {
       let timer = setTimeout(() => {
          setCount((count) => count+1);
        }, 1000);
        return () => clearTimeout(timer)
      }, [count]);
    return (
          <h1 className='timer-text'>You have used {count} seconds on this website !</h1>
    )}
export default Timer