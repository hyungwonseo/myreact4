import React from 'react'
import { create } from 'zustand'
import CounterDisplay from './CounterDisplay';
import CounterButtons from './CounterButtons';

export const useCounterStore = create((set) => ({
    count: 0,
    increase: ()=>set((state)=> ({count: state.count + 1})),
    decrease: ()=>set((state)=> ({count: state.count - 1})),
}));

function CounterWrapper() {
  return (
    <>
    <div>CounterWrapper</div>
    <CounterDisplay/>
    <CounterButtons/>
    </>
  )
}

export default CounterWrapper