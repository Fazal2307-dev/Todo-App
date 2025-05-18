import React, { useEffect, useState } from "react";


const CounterComponent = ()=>{
  const [count,setCount] = useState(0)

    useEffect(()=>{
     console.log("hey fazal useEffect is working");
     
    },[count])
  return (
    <div>
        <p>value is {count}</p>
        <h6> value is {count%2 === 0 ? "even":"odd"}</h6>
        <button onClick={()=>setCount(count +1)}>Incrementation</button>
      <button onClick={()=>setCount(count -1)}>Decrementation</button>
    </div>
  )
}

export default CounterComponent;