import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber,decNumber } from '../actions/MainAction'

const Ui = () => {
    const myState=useSelector((state)=>state.changeNumber)
    const dispatch=useDispatch();
  return (
    <>
    <div className='container mx-3'>
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React Redux</h4>

        <div className='quantity'>
            <button onClick={()=>dispatch(decNumber())} className='quality_minus' title="Decrement"><span>-</span></button>
            <input name="quantity" type="text" className='quantity_input' value={myState}/>
            <button onClick={()=>dispatch(incNumber())} className='quality_plus' title="Increment"><span>+</span></button>
        </div>
    </div>
    </>
  )
}

export default Ui