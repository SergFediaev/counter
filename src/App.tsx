import React, {memo, useEffect, useReducer} from 'react'
import './App.css'
import {Counter} from './components/counter/Counter'
import {Settings} from './components/settings/Settings'
import {KEYS} from './strings'
import {counterReducer} from './store/counterReducer'
import {setCount, setSettings, setState} from './store/counterActions'
import {StateType} from './store/counterTypes'
import {getCounter} from './store/counter'

export const App = memo(() => {
    const [counter, dispatch] = useReducer(counterReducer, getCounter())
    useEffect(() => localStorage.setItem(KEYS.COUNTER, JSON.stringify(counter)), [counter])

    //region Handlers.
    const setCountHandler = (count: number) => dispatch(setCount(count))
    const setSettingsHandler = (initialCount: number, maxCount: number) => dispatch(setSettings(initialCount, maxCount))
    const setStateHandler = (state: StateType) => dispatch(setState(state))
    //endregion

    return <div className="app">
        <Settings counter={counter}
                  setSettings={setSettingsHandler}
                  setState={setStateHandler}/>
        <Counter setCount={setCountHandler}
                 counter={counter}/>
    </div>
})