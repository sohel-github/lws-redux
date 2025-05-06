import React from 'react'

const Total = ({total}) => {
  return (
    <div className='border p-5 w-1/2 text-center'>
        <p className='text-2xl'>Total is : <b>{total}</b></p>
    </div>
  )
}

export default Total