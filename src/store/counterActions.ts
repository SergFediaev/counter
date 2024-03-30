import {ACTION_TYPES} from '../strings'
import {StateType} from './counterTypes'

export const setCount = (count: number) => ({
    type: ACTION_TYPES.SET_COUNT,
    payload: {count},
} as const)

export const setSettings = (initialCount: number, maxCount: number) => ({
    type: ACTION_TYPES.SET_SETTINGS,
    payload: {initialCount, maxCount},
} as const)

export const setState = (state: StateType) => ({
    type: ACTION_TYPES.SET_STATE,
    payload: {state},
} as const)