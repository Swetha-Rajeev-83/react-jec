import React from 'react'
import { FcLike } from "react-icons/fc";
const reactionArray=["😩","😞","😔","☹️","🙁","😒","🙂","😊","😀","😁","😍","🤩"]
const Array = () => {
    const[count,setCount]=React.useState(0)
    const handleClick=()=>{
        if(count < reactionArray.length-1){
            setCount(count+1)
        }

    }
    
  return (
    <>
    <div className="container">
        <h2>
            Likes : {count} {reactionArray[count]}
        </h2>
        <h2>
            <FcLike
            size={40}
            onClick={handleClick}
            style={{cursor:"pointer"}}
            />
        </h2>
    </div>
    </>
  )
}

export default Array