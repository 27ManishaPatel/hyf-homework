import React from 'react'

import{useEffect, useState} from 'react';

function Timer() {
    const [count, setCount]=useState(0)
    useEffect(()=>{
        setTimeout (()=>{
            setCount((prev)=>prev+1)
        },1000)
    })
    return (
     
          <h1 className='timer-text'>You have used {count} seconds on this website !</h1>
    )}
    setInterval(Timer, 1000)
export default Timer