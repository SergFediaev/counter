import s from './Display.module.css'
import {STATE, STRINGS, TEXT} from '../../../strings'
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
                             }: DisplayPropsType) => {
    const finalClassName = state === STATE.NORMAL ? (count === maxCount ? s.countLimit : STRINGS.EMPTY) : s.info + (state === STATE.ERROR ? STRINGS.SPACE + s.error : STRINGS.EMPTY)
    const displayContent = state === STATE.NORMAL ? count : state === STATE.ERROR ? TEXT.INCORRECT_VALUE : TEXT.SET_VALUES

    return <div className={s.display}>
        <span className={finalClassName}>{displayContent}</span>
    </div>
})