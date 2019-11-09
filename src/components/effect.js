import React, { useState, useEffect } from 'react'

const Effect = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `클릭 횟수 ${count}`;
    console.log('Effect');
  },[]);

  const onIncreaseCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>클릭 횟수 : { count } </p>
      <button 
        type="button"
        onClick={onIncreaseCount}>
        + 1
      </button>
    </div>
  )
}

export default Effect