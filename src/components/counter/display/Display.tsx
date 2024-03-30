import s from './Display.module.css'
import {STATE, TEXT} from '../../../strings'
import {memo} from 'react'
import {StateType} from '../../../store/counterTypes'

type DisplayPropsType = {
    count: number
    maxCount: number
    state: StateType
}

export const Display = memo(({
                                 count,
                                 maxCount,
                                 state,
                             }: DisplayPropsType) => <div className={s.display}>
    {state === STATE.NORMAL ? <span className={count === maxCount ? s.countLimit : undefined}>{count}</span> : <span
        className={`${s.info} ${state === STATE.ERROR && s.error}`}>{state === STATE.ERROR && TEXT.INCORRECT_VALUE}{state === STATE.EDIT && TEXT.SET_VALUES}</span>}
</div>)