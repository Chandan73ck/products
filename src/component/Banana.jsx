import React from 'react'
import { useState } from 'react'

const Banana = (props) => {
  const [count, setCount] = useState(0)

  const inc = () => {
    setCount(count + 1)
    if (count >= 4) {
      setCount(4)
    }

  }
  const dec = () => {
    setCount(count - 1)
    if (count <= 0) {
      setCount(0)
    }
  }

  return (
    <div className='mx-auto pt-5 bg-slate-50'>
      <div >
        <div className="card-container h-72 w-48 border-2 ">
          <div className='card h-40 w-40 pt-14 flex flex-col  justify-center mx-3'>
            <div className='flex justify-center items-center '>
              <img width={120} src={props.image} alt="Banana shake" />
            </div>
            <p className='mt-5'>{props.name} </p>
            <p className='my-6'>200 ml</p>
          </div>
          <div className='flex flex-row justify-between items-center  pt-14 mx-3'>
            <p>₹{props.price} </p>
            <div className=' flex items-center justify-around border border-green-500 w-20 h-10 bg-green-50 rounded-md '>
              <button className='font-bold' onClick={dec}>-</button>
              <div>{count}</div>
              <button className='font-bold' onClick={inc}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banana
