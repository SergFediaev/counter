import React, {useState} from 'react'
import './App.css'
import {Counter} from './components/counter/Counter'
import {Settings} from './components/settings/Settings'
import {DEFAULT, KEYS, STATE} from './strings'

export type StateType = typeof STATE.NORMAL | typeof STATE.EDIT | typeof STATE.ERROR

export const App = () => {
    const [initialCount, setInitialCount] = useState(getInitialCount())
    const [incrementStep] = useState(getIncrementStep())
    const [maxCount, setMaxCount] = useState(getMaxCount())
    const [count, setCount] = useState(getCount())
    const [state, setState] = useState<StateType>(STATE.NORMAL)

    const setInitialCountHandler = (initialCount: number) => {
        localStorage.setItem(KEYS.INITIAL_COUNT, initialCount.toString())
        setInitialCount(initialCount)
        setCountHandler(initialCount)
    }

    const setMaxCountHandler = (maxCount: number) => {
        localStorage.setItem(KEYS.MAX_COUNT, maxCount.toString())
        setMaxCount(maxCount)
    }

    const setCountHandler = (count: number) => {
        localStorage.setItem(KEYS.COUNT, count.toString())
        setCount(count)
    }

    return <div className="app">
        <Settings
            initialCount={initialCount}
            setInitialCount={setInitialCountHandler}
            maxCount={maxCount}
            setMaxCount={setMaxCountHandler}
            state={state}
            setState={setState}
        />
        <Counter
            initialCount={initialCount}
            count={count}
            setCount={setCountHandler}
            incrementStep={incrementStep}
            maxCount={maxCount}
            state={state}
        />
    </div>
}

const getInitialCount = () => Number(localStorage.getItem(KEYS.INITIAL_COUNT) ?? DEFAULT.INITIAL_COUNT)

const getIncrementStep = () => Number(localStorage.getItem(KEYS.INCREMENT_STEP) ?? DEFAULT.INCREMENT_STEP)

const getMaxCount = () => Number(localStorage.getItem(KEYS.MAX_COUNT) ?? DEFAULT.MAX_COUNT)

const getCount = () => Number(localStorage.getItem(KEYS.COUNT) ?? DEFAULT.INITIAL_COUNT)