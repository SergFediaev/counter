import {DEFAULT, KEYS, STATE} from '../strings'
import {CounterType} from './counterTypes'

const defaultCounter: CounterType = {
    initialCount: DEFAULT.INITIAL_COUNT,
    incrementStep: DEFAULT.INCREMENT_STEP,
    maxCount: DEFAULT.MAX_COUNT,
    count: DEFAULT.INITIAL_COUNT,
    state: STATE.NORMAL,
}

export const getCounter = (): CounterType => {
    const counter = localStorage.getItem(KEYS.COUNTER)
    return counter ? JSON.parse(counter) as CounterType : defaultCounter
}