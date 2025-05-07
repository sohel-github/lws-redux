import React,{useState} from 'react'
import Counter from './components/Counter'
import Total from './components/Total'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counters/counterSlice'
import Posts from './components/Posts'

// const initialState = [
//   {
//     id: 1,
//     value: 0
//   },
//   {
//     id: 2,
//     value: 0
//   }
// ]

const App = () => {

  // const [counters, setCounters] = useState(initialState)
  
  const counters = useSelector((state) => state.counters)
  const dispatch = useDispatch()

  const totalValue = counters.reduce((sum, current) => sum + current.value, 0)

  const handleIncrement = (id) => {
    // const updatedCounter = counters.map(counter => {
    //   if(counter.id === id){
    //     return {
    //       ...counter,
    //       value: counter.value + 1
    //     }
    //   }
    //   return counter;
    // })
    // setCounters(updatedCounter)

    dispatch(increment(id))
  }

  const handleDecrement = (id) => {
    // const updatedCounter = counters.map(counter => {
    //   if(counter.id === id){
    //     return {
    //       ...counter,
    //       value: counter.value - 1
    //     }
    //   }
    //   return counter;
    // })
    // setCounters(updatedCounter)

    dispatch(decrement(id))
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen p-5'>
      {counters.map((counter)=> (
        <Counter 
        key={counter.id} 
        counter={counter}
        onIncrement={()=>handleIncrement(counter.id)} 
        onDecrement={()=>handleDecrement(counter.id)} 
        />
      ))}
      <Total total={totalValue} />
      <Posts />
    </div>
  )
}

export default App
