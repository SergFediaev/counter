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
    let finalClassName = undefined
    let displayContent = count.toString()

    if (state === STATE.NORMAL) {
        if (count === maxCount) finalClassName = s.countLimit
    } else {
        finalClassName = s.info
        if (state === STATE.ERROR) {
            displayContent = TEXT.INCORRECT_VALUE
            finalClassName += STRINGS.SPACE + s.error
        } else displayContent = TEXT.SET_VALUES
    }

    return <div className={s.display}>
        <span className={finalClassName}>{displayContent}</span>
    </div>
})