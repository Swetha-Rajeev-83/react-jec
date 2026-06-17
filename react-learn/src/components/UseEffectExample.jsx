import React from 'react'


const UseEffectExample = () => {
    const[count,setCount]=React.useState(0)
    React.useEffect(()=>{
        console.log("UseEffect is active")
    },[count])
  return (
    <>
    <h1>UseEffect Example</h1>
    <h2>Count : {count}</h2>
    <button onClick={()=>{setCount(count+1)}}>Add</button>
    </>
  )
}

export default UseEffectExample