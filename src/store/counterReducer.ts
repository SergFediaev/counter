import {ACTION_TYPES} from '../strings'
import {CounterActionType, CounterType} from './counterTypes'

export const counterReducer = (counter: CounterType, action: CounterActionType): CounterType => {
    const {type, payload} = action
    switch (type) {
        case ACTION_TYPES.SET_COUNT:
            return {...counter, count: payload.count}
        case ACTION_TYPES.SET_SETTINGS:
            return {
                ...counter, initialCount: payload.initialCount, maxCount: payload.maxCount, count: payload.initialCount,
            }
        case ACTION_TYPES.SET_STATE:
            return {
                ...counter, state: payload.state,
            }
        default:
            return counter
    }
}