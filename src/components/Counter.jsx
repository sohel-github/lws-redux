import React from 'react'

const Counter = ({counter, onIncrement, onDecrement}) => {
    return (
        <div className='flex flex-col justify-center w-1/2 border p-5 mb-3'>
            <div className='flex justify-center text-5xl'>{counter.value}</div>
            <div className='flex justify-center gap-5 mt-5'>
                <button onClick={onIncrement} className='border px-3 py-2 bg-blue-600 text-sm text-white rounded-md'>Increment</button>
                <button onClick={onDecrement} className='border px-3 py-2 bg-red-600 text-sm text-white rounded-md'>Decrement</button>
            </div>
        </div>
    )
}

export default Counter