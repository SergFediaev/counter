import {STATE} from '../strings'
import {setCount, setSettings, setState} from './counterActions'

export type StateType = typeof STATE.NORMAL | typeof STATE.EDIT | typeof STATE.ERROR

export type CounterType = {
    initialCount: number
    incrementStep: number
    maxCount: number
    count: number
    state: StateType
}

export type CounterActionType =
    ReturnType<typeof setCount>
    | ReturnType<typeof setSettings>
    | ReturnType<typeof setState>