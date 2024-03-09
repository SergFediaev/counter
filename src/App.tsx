import React, {useState} from 'react'
import './App.css'
import {Counter} from './components/counter/Counter'
import {Settings} from './components/settings/Settings'

export type StateValueType = 'edit' | 'error' | 'normal'

const KEYS = {
    INITIAL_COUNT: 'initialCount',
    INCREMENT_STEP: 'incrementStep',
    MAX_COUNT: 'maxCount',
} as const

const DEFAULT_VALUES = {
    INITIAL_COUNT: 0,
    INCREMENT_STEP: 1,
    MAX_COUNT: 5,
} as const

export const App = () => {
    const [initialCount, setInitialCount] = useState<number>(Number(localStorage.getItem(KEYS.INITIAL_COUNT) ?? DEFAULT_VALUES.INITIAL_COUNT))

    const [incrementStep] = useState<number>(Number(localStorage.getItem(KEYS.INCREMENT_STEP) ?? DEFAULT_VALUES.INCREMENT_STEP))

    const [maxCount, setMaxCount] = useState<number>(Number(localStorage.getItem(KEYS.MAX_COUNT) ?? 5))

    const [count, setCount] = useState<number>(initialCount)

    const setInitialCountHandler = (initialCount: number) => {
        localStorage.setItem(KEYS.INITIAL_COUNT, initialCount.toString())
        setInitialCount(initialCount)
        setCount(initialCount)
    }

    const setMaxCountHandler = (maxCount: number) => {
        localStorage.setItem(KEYS.MAX_COUNT, maxCount.toString())
        setMaxCount(maxCount)
    }

    const [state, setState] = useState<StateValueType>('normal')

    const setStateHandler = (state: StateValueType) => setState(state)

    return <div className="app">
        <Settings
            initialCount={initialCount}
            setInitialCount={setInitialCountHandler}
            maxCount={maxCount}
            setMaxCount={setMaxCountHandler}
            state={state}
            setState={setStateHandler}
        />
        <Counter
            initialCount={initialCount}
            count={count}
            setCount={setCount}
            incrementStep={incrementStep}
            maxCount={maxCount}
            state={state}
        />
    </div>
}