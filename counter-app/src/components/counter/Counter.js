import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, setCustom } from '../../redux/state/counter/counterSlice';

const Counter = () => {
    const myNum = useRef();
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className='card'>
            <div className='card-header bg-secondary'>
                <h4 className='text-white'>Counter App</h4>
            </div>
            <div className='card-body'>
                <h1>{count}</h1>
                <div className='my-4'>
                    <button onClick={() => dispatch(increment())} className='btn btn-success mx-2'>Increase</button>
                    <button onClick={() => dispatch(decrement())} className='btn btn-danger mx-2'>Decrease</button>
                </div>
                <div className='my-4'>
                    <input ref={myNum} type='number' className='form-control' />
                    {/* Use onClick to dispatch the setCustom action */}
                    <button onClick={() => dispatch(setCustom(myNum.current.value))} className='btn btn-primary mt-2'>Set Custom</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
