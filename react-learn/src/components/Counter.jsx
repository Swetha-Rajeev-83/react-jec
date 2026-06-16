import React from 'react'

const Counter = () => {
    const[count,setCount]=React.useState(0)
    const increment=()=>{
        if(count<10){
        setCount(count + 1)
        }
    }
    const decrement=()=>{
        if(count>0){
        setCount(count-1)
        }
    } 
    const reset=()=>{
        setCount(0)
    }
  return (
    <>
    <h1>Counter App</h1>
    <h2>Count : {count}</h2>
    <button onClick={increment}>Inc</button>
    <button onClick={decrement}>Dec</button>
    <button onClick={reset}>Res</button>
    
    
    </>
  )
}

export default Counter