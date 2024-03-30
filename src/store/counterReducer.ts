import {ACTION_TYPES} from '../strings'
import {CounterActionType, CounterType} from './counterTypes'
import {getCounter, setCounterLocalStorage} from './counter'

export const counterReducer = (counter: CounterType = getCounter(), action: CounterActionType): CounterType => {
    const {type, payload} = action
    switch (type) {
        case ACTION_TYPES.SET_COUNT: {
            const counterCopy: CounterType = {...counter, count: payload.count}
            setCounterLocalStorage(counterCopy)
            return counterCopy
        }
        case ACTION_TYPES.SET_SETTINGS: {
            const counterCopy: CounterType = {
                ...counter,
                initialCount: payload.initialCount,
                maxCount: payload.maxCount,
                count: payload.initialCount,
            }
            setCounterLocalStorage(counterCopy)
            return counterCopy
        }
        case ACTION_TYPES.SET_STATE: {
            const counterCopy: CounterType = {...counter, state: payload.state}
            setCounterLocalStorage(counterCopy)
            return counterCopy
        }
        default:
            return counter
    }
}